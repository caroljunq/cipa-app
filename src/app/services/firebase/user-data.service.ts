import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import * as firebase from 'firebase/app';
import { Case } from './../../services/models/case';
import { ContentService } from '../../services/content/content.service';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  userInfo: any;

  constructor(
    private db: AngularFirestore,
    private authService: AuthenticationService,
    private contentService: ContentService
    ) { 
      this.userInfo = this.authService.UserInfo();
    }

  getUserInfo(){
    return this.db.doc('users/' + this.userInfo.email).valueChanges();
  }

  updateUserGlobalFavorites(data: Array<number>){
    const docRef = this.db.collection('users').doc(this.userInfo.email);
    return docRef.update({favorites: data});
  }

  updateSelectedCaseFavorites(db_id,favorites){
    const docRef = this.db.collection('users').doc(this.userInfo.email);
    return docRef.update({['cases.'+db_id+'.favorites']: favorites});
  }

  addCase(newCase: Case){
    this.contentService.removeSelectedCase();
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
    this.contentService.removeSelectedCase();
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
