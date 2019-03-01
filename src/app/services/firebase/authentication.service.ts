import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user = {} as User;
  authenticationState = new BehaviorSubject(false);

  constructor(public authService: AngularFireAuth,
              private storage: Storage,
              private plt: Platform) {
      this.plt.ready().then(() => {
          this.checkToken();
      });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
         this.authenticationState.next(true);
      }
    });
  }

  async Login(user: User) {
    const authAux = this.authService.auth;
    const storageAux = this.storage;
    const authState = this.authenticationState;
    return await new Promise(async function (resolve, reject) {
      const loginResult = await authAux.signInWithEmailAndPassword(user.email, user.password)
      .then(function(res) {
          console.log(res);
          console.log(res.user.uid);
          storageAux.set(TOKEN_KEY, res.user.uid).then((r) => {
              authState.next(true);
              console.log('credencial adicionada ao storage');
          });
          resolve(res);
      }).catch(function(err) {
          reject(err);
      });
    });
  }

  async Logout() {
    const authAux = this.authService.auth;
    const storageAux = this.storage;
    const authState = this.authenticationState;
    return await new Promise (async function(resolve, reject) {
        await authAux.signOut()
        .then(function() {
          storageAux.remove(TOKEN_KEY).then(() => {
            authState.next(false);
            console.log('chave removida do storage');
          });
          resolve('user-signedOut');
        }).catch(function(err) {
          reject(err);
        });
    });

  }

  UserInfo() {
    return this.authService.auth.currentUser;
  }

  Register(user: User) {
    const authAux = this.authService.auth;
    return new Promise(async function(resolve, reject) {
        const newAccount = await authAux.createUserWithEmailAndPassword(user.email, user.password)
        .then(function(res) {
            res.user.updateProfile({displayName: user.displayName, photoURL: ''});
            res.user.sendEmailVerification();
            resolve('user-created');
        }).catch(function(err) {
            reject(err);
        });
    });
  }

}
