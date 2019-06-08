import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import { UserInfo } from './../../services/models/user';
// import { userInfo } from 'os';

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
    return docRef.update(obj);
  }

  //pega o id de todos os atendimentos do usuario
  // getUserPatients(){

  // }

  // //pega os favoritados daquele atendimento
  // getPatientFavorites(patient){

  // }
  
}
