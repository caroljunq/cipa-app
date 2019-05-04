import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import { UserInfo } from './../../services/models/user';

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

  getUserFavorites(){
    return this.db.doc('users/' + this.userInfo.email).valueChanges();
  }

  updateUserFavorites(data){
    const docRef = this.db.collection('users').doc(this.userInfo.email);
    return docRef.update({favorites: data});
  }
  
}
