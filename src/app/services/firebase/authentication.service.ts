import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
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
          // this.checkToken();
          console.log('usuario atual'); 
          console.log(this.UserInfo());
      });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(async res => {
      let bool: boolean;
      if (res) {
          // Login
          await this.LoginWithStorageData(res.email, res.password)
          .then(function(reso) {
              bool = true;
              // this.authenticationState.next(true);
          }).catch(function(err) {
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
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
      });
  }

  SimpleLogout() {
    this.authService.auth.signOut();
  }

  async Login(user: User) {
    const authService = this.authService;
    const authAux = this.authService.auth;
    const storageAux = this.storage;
    const authState = this.authenticationState;
    return await new Promise(async function (resolve, reject) {
        const persistenceResult = await authAux.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async function() {
            console.log('entrando aqui');
            const loginResult = await authAux.signInWithEmailAndPassword(user.email, user.password)
            .then(async function(res) {
                console.log(res);
                if ( res.user.emailVerified === false) {
                      const auxObj = {
                          message: '',
                          code: 'user-email-not-verified'
                      };
                      reject(auxObj);
                } else {
                  resolve(res);
                }
                authState.next(true);
            }).catch(function(err) {
                console.log(err);
                reject(err);
            });
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    });
    /* {
      const loginResult = await authAux.signInWithEmailAndPassword(user.email, user.password)
      .then(async function(res) {
          if ( res.user.emailVerified === false) {
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
            });
            resolve(res);
          }
      }).catch(function(err) {
          reject(err);
      });
    } */
  }

  /**firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
 */

  async Logout() {
    const authAux = this.authService.auth;
    const storageAux = this.storage;
    const authState = this.authenticationState;
    return await new Promise (async function(resolve, reject) {
        await authAux.signOut()
        .then(function() {
          storageAux.remove(TOKEN_KEY).then(() => {
            authState.next(false);
          }).catch(function(err) { 
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

  SendPasswordResetEmail(email){
      const aux = this.authService.auth;
      return new Promise( function(resolve, reject) {
          aux.sendPasswordResetEmail(email)
          .then(() => {
              resolve('Enviado');
          }).catch(err => {
              reject(err); 
          })
      });
  }

}
