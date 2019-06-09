import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import { resolve } from 'url';
// import { UserInfo } from './../../services/models/user';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  userInfo: any;

  constructor(
    private db: AngularFirestore,
    private authService: AuthenticationService
    ) { 
      this.userInfo = this.authService.UserInfo();
    }

  getUserInfo(){
    return this.db.doc('users/' + this.userInfo.email).valueChanges();
  }

  updateUserFavorites(data){
    const docRef = this.db.collection('users').doc(this.userInfo.email);
    return docRef.update({favorites: data});
  }

  addCase(newCase){
    const dob = new Date(newCase.dob);
    const id = newCase.id +'_'+dob.getTime();
    // adding new
    const docRef = this.db.collection('users').doc(this.userInfo.email);
    
    let obj = {};
    obj['cases.'+ id] = newCase;

    // como o firestore nao retorna erro quando está sem internet
    // utilizei promise e race, se o timeout termina primeiro,
    // então retorna falso
    let promiseTimeout = new Promise((resolve, reject) => {
      let wait = setTimeout(() => {
        clearTimeout(wait);
        reject(false);
      }, 1200)
    })

    let promiseFirestore = new Promise((resolve, reject) => {
      docRef.update(obj)
        .then((res)=>{resolve(true)})
        .catch((err) => {reject(false);})
    })
    
    return Promise.race([
      promiseFirestore,
      promiseTimeout 
    ])
  }

  //pega o id de todos os atendimentos do usuario
  // getUserPatients(){

  // }

  // //pega os favoritados daquele atendimento
  // getPatientFavorites(patient){

  // }
  
}
