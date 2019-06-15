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
    const date = new Date();
    const case_id = newCase.id + '_' + date.getTime();
    const docRef = this.db.collection('users').doc(this.userInfo.email);

    newCase.db_id = case_id;

    return docRef.update({['cases.'+ case_id]: newCase})
  }

  deleteCase(case_id: string){
    this.contentService.removeSelectedCase();
    const docRef = this.db.collection('users').doc(this.userInfo.email);

    return docRef.update({
      ['cases.' + case_id]: firebase.firestore.FieldValue.delete()
    })
  }
}
