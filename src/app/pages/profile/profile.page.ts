import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import { UserInfo } from './../../services/models/user';
import { Observable } from 'rxjs';
import { ToastController, ModalController } from '@ionic/angular';
import { ContentService } from 'src/app/services/content/content.service';
import { SelectSearchbarPage } from '../select-searchbar/select-searchbar.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    public userInfo: any;
    public userDBinfo: any;
    userDoc: AngularFirestoreDocument<UserInfo>;
    singleUser: Observable<UserInfo>;

    user = {} as UserInfo;
    modalOpened: boolean = false;

    constructor(
        private authService: AuthenticationService,
        private db: AngularFirestore,
        public toastController: ToastController,
        private contentService: ContentService,
        private modal: ModalController
    ) {}

  ngOnInit() {
      this.userInfo = this.authService.UserInfo();

      this.userDoc = this.db.doc('users/' + this.userInfo.email);
      this.singleUser = this.userDoc.valueChanges();

      this.singleUser.subscribe((res) => {;
          this.user = res;
      });
  }

  VerifyUser(){
      // Atualizar informações do usuario
      if(this.user.selectedCity && this.user.selectedState && this.user.name != ''){
        const docRef = this.db.collection('users').doc(this.userInfo.email); 

        const update = docRef.update(this.user).then(() => {
            this.PresentToast('Informações Atualizadas com sucesso!', 3000); 
        }).catch((err) => {
            this.PresentToast('Não foi possível atualizar as informações, por favor tente mais tarde.', 4000); 
        })
      }else{
        this.PresentToast('Todos os campos devem ser preenchidos.', 2000); 
      }
  }

  SendEmail() {
      this.authService.SendPasswordResetEmail(this.userInfo.email).then(() => {
          this.PresentToast('Email para troca de senha enviado com sucesso!', 4000);
      }).catch((err) => {
          this.PresentToast('Erro ao enviar o email, por favor tente novamente mais tarde', 4000);
      });
  }

  async PresentToast(message, duration) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: 'dark'
    });
    toast.present();
  }

  async openModalState(){
    if(!this.modalOpened){
      const title = 'seu estado'
      this.user.selectedCity = null;
      this.modalOpened  = true;
      const myModal = await this.modal.create({
        component: SelectSearchbarPage, 
        componentProps:{state: this.user.selectedState, title: title, type: 'estado', city: null}
      });

      myModal.present()
      
      let selectedOption = await myModal.onWillDismiss();
      this.modalOpened = false;

      if(selectedOption.data){
        this.user.selectedState = selectedOption.data;
      }
    }
  }

  async openModalCity(){
    if(this.user.selectedState && !this.modalOpened){
      this.modalOpened  = true;
      const title = 'sua cidade';
      
      const myModal = await this.modal.create({
        component: SelectSearchbarPage, 
        componentProps:{state: this.user.selectedState, title: title, type: 'cidade', city: this.user.selectedCity}
      });
  
      myModal.present()
      
      let selectedOption = await myModal.onWillDismiss();
      this.modalOpened = false;
      if(selectedOption.data){
        this.user.selectedCity = selectedOption.data;
      }
    }
  }
}
