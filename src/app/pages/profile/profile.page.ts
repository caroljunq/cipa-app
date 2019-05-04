import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthenticationService } from 'src/app/services/firebase/authentication.service';
import { UserInfo } from './../../services/models/user';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

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
  state: { nome?: string; id?: number; sigla?: string; };
  city: { nome?: string; id?: number; estado?: number; };

  constructor(private authService: AuthenticationService,
              private db: AngularFirestore,
              public toastController: ToastController) {
                  this.state = {
                      nome: '', 
                      id: null, 
                      sigla: ''
                  }; 
                  this.city = {
                      nome: '', 
                      id: null, 
                      estado: null
                  }
               }

  ngOnInit() {
      this.userInfo = this.authService.UserInfo();

      this.userDoc = this.db.doc('users/' + this.userInfo.email);
      this.singleUser = this.userDoc.valueChanges();

      this.singleUser.subscribe((res) => {
          console.log(`Objeto a ser lido:`, res);
          this.user = res;
          this.state = res.selectedState; 
          this.city = res.selectedCity;

          console.log(this.city.nome); 
          console.log(this.state.nome);
      });
  }

  VerifyUser(){
      console.log(this.user);
      // Atualizar informações do usuario 
      const docRef = this.db.collection('users').doc(this.userInfo.email); 

      const update = docRef.update(this.user).then(() => {
          this.PresentToast('Informações Atualizadas com sucesso!', 3000); 
      }).catch((err) => {
          this.PresentToast('Não foi possível atualizar as informações, por favor tente mais tarde.', 4000); 
      })
  }

  SendEmail() {
      console.log(this.userInfo.email);
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
}
