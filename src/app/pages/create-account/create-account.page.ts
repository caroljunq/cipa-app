import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/firebase/authentication.service';
import { User, UserInfo } from 'src/app/services/models/user';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { state_list } from '../../services/cities/Estados';

/** Lista de cada estado */
import {  citiesOfAC, citiesOfAL, citiesOfAM, citiesOfAP, citiesOfBA, citiesOfCE,
          citiesOfDF, citiesOfES, citiesOfGO, citiesOfMA, citiesOfMG, citiesOfMS, 
          citiesOfMT, citiesOfPA, citiesOfPB, citiesOfPE, citiesOfPI, citiesOfPR,
          citiesOfRJ, citiesOfRN, citiesOfRO, citiesOfRR, citiesOfRS, citiesOfSC,
          citiesOfTO, citiesOfSE, citiesOfSP } from './../../services/cities/cities';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  /** Variaveis para a listagem de estados e cidades  */
  listaDeEstados = state_list;
  listaDeCidades = [  , citiesOfAC, citiesOfAL, citiesOfAM, citiesOfAP, citiesOfBA, citiesOfCE,
                        citiesOfDF, citiesOfES, citiesOfGO, citiesOfMA, citiesOfMG, citiesOfMS, 
                        citiesOfMT, citiesOfPA, citiesOfPB, citiesOfPE, citiesOfPI, citiesOfPR,
                        citiesOfRJ, citiesOfRN, citiesOfRO, citiesOfRR, citiesOfRS, citiesOfSC,
                        citiesOfSE, citiesOfSP, citiesOfTO ];

  /** Informações pessoais do usuario  */
  name: string;
  sex: string; 
  dob: any;
  selectedState = null; 
  selectedCity: object;

  /** Informações profissionais do usuario  */
  formation: string;
  otherFormation: string;
  actionArea: string;
  otherArea: string;
  pastXp: string;
  pastXpClass: string;
  otherPastXpClass: string;

  /** Informações de contato do usuário  */
  email: string;
  password: string;
  confirmedPassword: string;

  /** Objeto user  */
  user = {} as User;
  userInfo = {} as UserInfo;

  constructor(private authService: AuthenticationService,
              public toastController: ToastController,
              private router: Router,
              private db: AngularFirestore, 
              private alertController: AlertController) { }

  ngOnInit() {    
    // Reiniciando as variaveis
    this.name = '';
    this.sex = '';
    this.dob = undefined;
    this.selectedState = null; 
    this.selectedCity = null;

    this.formation = '';
    this.otherFormation = '';
    this.actionArea = '';
    this.otherArea = '';
    this.pastXp = '';
    this.pastXpClass = '';
    this.otherPastXpClass = '';

    this.email = '';
    this.password = '';
    this.confirmedPassword = '';
  }

  accepted () {
      console.log('aceitou'); 
      //console.log(this.user)

      this.userInfo.name = this.name; 
      this.userInfo.sex = this.sex; 
      this.userInfo.dob = this.dob; 
      this.userInfo.selectedState = this.selectedState;
      this.userInfo.selectedCity = this.selectedCity;
      this.userInfo.formation = this.formation; 
      this.userInfo.otherFormation = this.otherFormation;
      this.userInfo.actionArea = this.actionArea; 
      this.userInfo.otherArea = this.otherArea;
      this.userInfo.pastXp = this.pastXp; 
      this.userInfo.pastXpClass = this.pastXpClass;
      this.userInfo.otherPastXpClass = this.otherPastXpClass;
      this.userInfo.email = this.email; 
      this.userInfo.password = this.password; 
      this.userInfo.confirmedPassword = this.confirmedPassword;

      console.log(this.userInfo);
  }

  rejected = function () {
      console.log('rejeitou');
  }

  async VerifyFields() {
    let status;
    if (this.name === '' || this.email === '' || this.password === '' || this.confirmedPassword === '') {
      this.PresentToast('Preencha todos os campos', 3000);
    } else if (this.password !== this.confirmedPassword) {
      this.PresentToast('As senhas são diferentes', 3000);
    } else {
      this.presentAlertConfirm( this.accepted, this.rejected );
      /*console.log(this.name, this.email, this.password, this.confirmedPassword);
      this.userInfo..displayName = this.name;
      this.userInfo..email = this.email;
      this.userInfo..password = this.password;
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
    }*/
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

  /** Alert  */
  async presentAlertConfirm( funAceito, funNAceito ) {
    const alert = await this.alertController.create({
      header: 'Termos de Uso',
      message: 'Seus dados de cadastro serão utilizados para analisarmos o perfil dos usuários deste aplicativo e propor melhorias de acesso e navegação para os desenvolvedores. Você aceita?',
      buttons: [{
          text: 'Não aceito',
          role: 'cancel',
          cssClass: 'danger',
          handler: funNAceito
         }, 
         {
          text: 'Aceito',
          handler: funAceito
        }
      ]
    });
    await alert.present();
  }



  CreateAccount() {
    this.VerifyFields();
  }

  GetUserInfo() {
    console.log(this.authService.UserInfo());
  }

}
