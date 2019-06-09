import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserDataService } from '../../services/firebase/user-data.service';
import { ContentService } from '../../services/content/content.service';
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
    private contentService: ContentService
  ) { }

  ngOnInit() {
    //retrieve data from db
    this.userDataService.getUserInfo()
      .subscribe(
        (user: UserInfo) => {
          if(user.cases){
            this.cases_id = Object.keys(user.cases);
            this.cases = user.cases;
          }
        },
        (err) => {
          // pegar algum dado do localstorage?
        },
        () => {}
      )
  }

  createCase(){
    this.navCtrl.navigateForward('/new-case');
  }

  editCase(case_id){
    this.contentService.setRenderCase(this.cases[case_id],case_id);
    this.navCtrl.navigateForward('/new-case');
  }
}
