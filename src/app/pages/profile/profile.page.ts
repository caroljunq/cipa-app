import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import { UserData } from './../../services/models/userData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public userInfo: any;
  public userDBinfo: any;
  userDoc: AngularFirestoreDocument<UserData>;
  singleUser: Observable<UserData>;

  constructor(private authService: AuthenticationService,
              private db: AngularFirestore) { }

  ngOnInit() {
      this.userInfo = this.authService.UserInfo();

      this.userDoc = this.db.doc('users/' + this.userInfo.email);
      this.singleUser = this.userDoc.valueChanges();

      console.log('Current user: ', this.userDBinfo);
      console.log('From firestore: ', this.singleUser);
  }

}
