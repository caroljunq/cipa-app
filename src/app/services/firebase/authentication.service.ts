import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { auth } from 'firebase';

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
    return this.storage.get(TOKEN_KEY).then(async res => {
      let bool: boolean;
      console.log(res);
      if (res) {
          // Login
          await this.LoginWithStorageData(res.email, res.password)
          .then(function(reso) {
              console.log('login com info do storage feito com sucesso');
              console.log(reso);
              bool = true;
              // this.authenticationState.next(true);
          }).catch(function(err) {
              console.log(err);
              bool = false;
          });
      }
      this.authenticationState.next(bool);
    });
  }

  async LoginWithStorageData(email, password) {
      const aux = this.authService.auth;
      return await new Promise(async function(resolve, reject) {
          const loginResult =  await aux.signInWithEmailAndPassword(email, password)
        .then(function (res) {
            console.log('simple login sucessfully', res);
            resolve(res);
        }).catch(function (err) {
            console.log('ops', err);
            reject(err);
        });
      });
  }

  SimpleLogout() {
    this.authService.auth.signOut();
  }

  async Login(user: User) {
    const authAux = this.authService.auth;
    const storageAux = this.storage;
    const authState = this.authenticationState;
    return await new Promise(async function (resolve, reject) {
      const loginResult = await authAux.signInWithEmailAndPassword(user.email, user.password)
      .then(async function(res) {
          console.log(res);
          console.log(res.user.uid);
          if ( res.user.emailVerified === false) {
                console.log('alo');
                const auxObj = {
                    message: '',
                    code: 'user-email-not-verified'
                };
                reject(auxObj);
          } else {
            const auxObj2 = {
              email: user.email,
              password: user.password
            };
            storageAux.set(TOKEN_KEY, auxObj2).then((r) => {
                authState.next(true);
                console.log('email e senha adicionada ao storage');
            });
            resolve(res);
          }
      }).catch(function(err) {
          reject(err);
      });
    });
  }

  async Logout() {
    console.log('alo 2');
    const authAux = this.authService.auth;
    const storageAux = this.storage;
    const authState = this.authenticationState;
    return await new Promise (async function(resolve, reject) {
        await authAux.signOut()
        .then(function() {
          storageAux.remove(TOKEN_KEY).then(() => {
            authState.next(false);
            console.log('usuario e senha removida do storage');
          }).catch(function(err) { console.log(err); });
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
