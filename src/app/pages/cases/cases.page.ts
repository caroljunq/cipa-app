import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserDataService } from '../../services/firebase/user-data.service';
import { UserInfo } from './../../services/models/user';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage implements OnInit {

  cases_id: Array<string> = [];
  cases: any;

  constructor(
    private navCtrl: NavController,
    private userDataService: UserDataService,
  ) { }

  ngOnInit() {
    //retrieve data from db
    this.userDataService.getUserInfo()
      .subscribe(
        (user: UserInfo) => {
          this.cases_id = Object.keys(user.cases);
          this.cases = user.cases;
        },
        (err) => {
          //pega valor do local storage
          // this.getLocalStorageFavorites();
        },
        () => {}
      )
  }

  createCase(){
    this.navCtrl.navigateForward('/new-case');
  }

}
