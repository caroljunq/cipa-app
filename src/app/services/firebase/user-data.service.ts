import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import { resolve } from 'url';
// import { UserInfo } from './../../services/models/user';
import * as firebase from 'firebase/app';


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
    const dob = new Date(newCase.dob.replace('/'));
    const id = newCase.id +'_'+dob.getTime();
    // adding new
    const docRef = this.db.collection('users').doc(this.userInfo.email);

    newCase.dob = `${dob.getDate() + 1}/${dob.getMonth() + 1}/${dob.getFullYear()}`

    let obj = {};
    obj['cases.'+ id] = newCase;

    // como o firestore nao retorna erro quando está sem internet
    // utilizei promise e race, se o timeout termina primeiro,
    // então retorna falso
    let promiseTimeout = new Promise((resolve, reject) => {
      let wait = setTimeout(() => {
        clearTimeout(wait);
        reject(false);
      }, 700)
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

  async editCase(newData,case_id){
    try{
      let deleteAction = await this.deleteCase(case_id);
      let addAction = await this.addCase(newData); 
      console.log(deleteAction);
      console.log(addAction);
      return true;
    }catch(error){
      console.log("ERORRRRRR");
      return false;
    }  
  }

  deleteCase(case_id){

    const docRef = this.db.collection('users').doc(this.userInfo.email);

    let promiseTimeout = new Promise((resolve, reject) => {
      let wait = setTimeout(() => {
        clearTimeout(wait);
        reject(false);
      }, 700)
    })

    let promiseFirestore = new Promise((resolve, reject) => {

      docRef.update({
        ['cases.' + case_id]: firebase.firestore.FieldValue.delete()
      })
        .then((res)=>{resolve(true)})
        .catch((err) => {reject(false);})
    })

    return Promise.race([
      promiseFirestore,
      promiseTimeout 
    ])
  }
}
