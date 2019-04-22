import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/firebase/authentication.service';
import { User } from 'src/app/services/models/user';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

import { city_list } from '../../services/cities/Cidades';
import { state_list } from '../../services/cities/Estados';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  listaDeEstados = state_list;
  listaDeCidades = city_list;
  name: string;
  email: string;
  selectedState = null; /* {
    id: null,
    sigla: null,
    nome: null
  };*/
  selectedCity: object;
  formation: string;
  otherFormation: string;
  actionArea: string;
  otherArea: string;
  pastXp: string;
  pastXpClass: string;
  otherPastXpClass: string;
  password: string;
  confirmedPassword: string;
  user = {} as User;

  constructor(private authService: AuthenticationService,
              public toastController: ToastController,
              private router: Router,
              private db: AngularFirestore) { }

  ngOnInit() {
    // Reiniciando as variaveis
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmedPassword = '';

    console.log(state_list);
  }

  async VerifyFields() {
    let status;
    if (this.name === undefined || this.email === undefined || this.password === undefined || this.confirmedPassword === undefined) {
      this.PresentToast('Preencha todos os campos', 3000);
    } else if (this.password !== this.confirmedPassword) {
      this.PresentToast('As senhas são diferentes', 3000);
    } else {
      console.log(this.name, this.email, this.password, this.confirmedPassword);
      this.user.displayName = this.name;
      this.user.email = this.email;
      this.user.password = this.password;
      const registerResult = await this.authService.Register(this.user)
      .then(function(resolve) {
          status = resolve;
      }).catch(function(err) {
          status = err.code;
      });
      switch (status) {
        case 'auth/email-already-in-use':
            this.PresentToast('E-mail já está em uso, use outro e-mail', 3000);
            break;
        case 'auth/invalid-email':
            this.PresentToast('Por favor digite um e-mail válido', 3000);
            break;
        case 'auth/weak-password':
            this.PresentToast('A senha precisa de no mínimo 6 caracteres', 3000);
            break;
        case 'user-created':
            this.PresentToast('Usuário criado com sucesso!', 4000);

            // Criar um campo no firestore para o cliente
            this.db.collection('users').doc(this.email).set({
                name: this.name,
                job: ' ',
                phone: ' ',
                age: ' ',
                gender: ' ',
                cases: []
            });
            setTimeout(() => {
              this.router.navigateByUrl('/login');
            }, 4000);
            break;
    }
    }
  }

  async PresentToast(message, duration) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: 'dark'
    });
    toast.present();
  }

  CreateAccount() {
    this.VerifyFields();
  }

  GetUserInfo() {
    console.log(this.authService.UserInfo());
  }

}
