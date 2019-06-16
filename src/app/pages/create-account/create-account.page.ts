import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/firebase/authentication.service';
import { User, UserInfo } from 'src/app/services/models/user';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

import { ModalController } from '@ionic/angular';
import { SelectSearchbarPage } from '../select-searchbar/select-searchbar.page';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  /** Informações pessoais do usuario  */
  name: string;
  sex: string; 
  dob: any;
  selectedState = null;
  selectedCity = null;
  modalOpened: boolean = false;

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

  tried: boolean = false; 

  /** Objeto user  */
  user = {} as User;
  userInfo = {} as UserInfo;

  constructor(private authService: AuthenticationService,
              public toastController: ToastController,
              private router: Router,
              private db: AngularFirestore, 
              private alertController: AlertController,
              private loadingCtrl: LoadingController,
              private modal: ModalController
            ) { }

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

  async accepted () {  
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

      /** Criando um usuário no firebase  */
      let status; 
      let loading = await this.loadingCtrl.create({
        spinner: 'bubbles',
        message: 'Aguarde um momento...'
      });
  
      loading.present();
      const registerResult = await this.authService.Register({
          displayName: this.name, 
          email: this.email, 
          password: this.password
      })
      .then(function(resolve) {
          status = resolve;
      }).catch(function(err) {
          status = err.code;
      }).finally(() => {
          loading.dismiss();
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
            this.PresentToast('Usuário criado com sucesso! Por favor verifique um email de verificação de conta na sua caixa de entrada do email cadastrado.', 4000);

            // Criar um campo no firestore para o cliente
            this.db.collection('users').doc(this.email).set(this.userInfo);

            // Após um segundo vai para a página de login
            setTimeout(() => {
              this.router.navigateByUrl('/login');
            }, 4000);
            break;
    }


  }

  rejected = function () {
      this.presentSimpleAlert('Termos de Uso', 'É necessário aceitar os termos de uso para o uso do aplicativo.');
  }

  async VerifyFields() {
    let status;
    if (this.name === '' || this.email === '' || this.password === '' || this.confirmedPassword === '' ||
        this.sex === '' || this.dob === undefined || this.selectedCity == null || this.selectedState == null ||
        this.formation == '' || this.actionArea == '' || this.pastXp == '' || this.pastXpClass == '') {
      this.tried = true;
      this.PresentToast('Preencha todos os campos', 3000);
    } else if (this.password !== this.confirmedPassword) {
        if(this.tried) this.tried = false;
        this.PresentToast('As senhas são diferentes', 3000);
    } else {
      if(this.tried) this.tried = false;
      this.presentAlertConfirm();      
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
  async presentAlertConfirm( ) {
    const alert = await this.alertController.create({
      header: 'Termos de Uso',
      message: 'Seus dados de cadastro e o conteúdo que você disponibilizará neste aplicativo será utilizado para analisar o perfil de utilização do mesmo e propor melhorias de acesso e navegação aos desenvolvedores. Sugerimos utilizar nomes fictícios ou somente as iniciais dos nomes ao cadastrar os atendimentos.Você aceita?',
      buttons: [
        {
          text: 'Não aceito',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
             this.rejected();
          }
        },   
        {
          text: 'Aceito',
          handler: () => {
              this.accepted();
          }
        }    
      ]
    });
    await alert.present();
  }

  async presentSimpleAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  CreateAccount() {
    this.VerifyFields();
  }

  GetUserInfo() {
     return this.authService.UserInfo();
  }

  async openModalState(){
    if(!this.modalOpened){
      this.selectedCity = null;
      const title = 'seu estado'
      this.modalOpened  = true;
      const myModal = await this.modal.create({
        component: SelectSearchbarPage, 
        componentProps:{state: {}, title: title, type: 'estado'}
      });

      myModal.present()
      
      let selectedOption = await myModal.onWillDismiss();
      this.modalOpened = false;

      if(selectedOption.data){
        this.selectedState = selectedOption.data;
      }
    }
  }

  async openModalCity(){
    if(this.selectedState && !this.modalOpened){
      this.modalOpened  = true;
      const title = 'sua cidade';
      
      const myModal = await this.modal.create({
        component: SelectSearchbarPage, 
        componentProps:{state: this.selectedState, title: title, type: 'cidade'}
      });
  
      myModal.present()
      
      let selectedOption = await myModal.onWillDismiss();
      this.modalOpened = false;
      if(selectedOption.data){
        this.selectedCity = selectedOption.data;
      }
    }
  }
}
