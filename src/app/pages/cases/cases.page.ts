import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserDataService } from '../../services/firebase/user-data.service';
import { UserInfo } from './../../services/models/user';
import { Router } from '@angular/router';

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
    private router: Router,
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
          // pegar algum dado do localstorage?
        },
        () => {}
      )
  }

  createCase(){
    this.navCtrl.navigateForward('/new-case');
  }

  editCase(case_id){
    // this.router.navigateByUrl('/new-case');
    this.router.navigate(['/new-case', { id: 11 }]);
  }

}
