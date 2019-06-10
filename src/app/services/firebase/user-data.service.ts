import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import * as firebase from 'firebase/app';
import { Case } from './../../services/models/case';

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

  updateUserFavorites(data: Array<number>){
    const docRef = this.db.collection('users').doc(this.userInfo.email);
    return docRef.update({favorites: data});
  }

  addCase(newCase: Case){
    const dob = new Date(newCase.dob);
    const case_id = newCase.id + '_' + dob.getTime();
    const docRef = this.db.collection('users').doc(this.userInfo.email);

    newCase.db_id = case_id;

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
      docRef.update({['cases.'+ case_id]: newCase})
        .then((res)=>{resolve(true)})
        .catch((err) => {reject(false);})
    })
    
    return Promise.race([
      promiseFirestore,
      promiseTimeout 
    ])
  }

  deleteCase(case_id: string){

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

  async editCase(newData: Case){
    try{
      let deleteAction = await this.deleteCase(newData.db_id);
      let addAction = await this.addCase(newData); 
      return true;
    }catch(error){
      return false;
    }  
  }

  
}
