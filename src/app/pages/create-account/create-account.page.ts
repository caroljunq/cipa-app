import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  name: string;
  email: string;
  password: string;
  confirmedPassword: string;

  constructor() { }

  ngOnInit() {
  }

  CreateAccount() {
    console.log(this.name, this.email, this.password, this.confirmedPassword)
  }

}
