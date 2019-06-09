import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { UserDataService } from '../../services/firebase/user-data.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.page.html',
  styleUrls: ['./new-case.page.scss'],
})
export class NewCasePage implements OnInit {

  id: string; 
  date: string = '2000-01-01';
  gender: string = 'f';
  notes: string;

  constructor(
    public toastController: ToastController,
    private userDataService: UserDataService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.PresentToast('Sugerimos utilizar nomes fictícios ou somente as iniciais dos nomes ao cadastrar os atendimentos',6000);
  }

  async PresentToast(message, duration) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: 'dark', 
      position: 'middle',
      showCloseButton: true, 
      closeButtonText: 'X'
    });
    toast.present();
  }

  async presentAlertError(message, title){
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'danger'
        },      
      ]
    });
    alert.present();
  }

  async presentAlertSuccess(message,title){
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            this.navCtrl.navigateForward('/home');
          }
        },      
      ]
    });
    alert.present();
  }

  createNewCase(){
    if(this.id && this.notes){
      let createdAt = this.date.valueOf()
      let x = this.userDataService.addCase({
        id: this.id,
        gender: this.gender,
        dob: createdAt.split('-').join('/'),
        notes: this.notes,
        favorites: [],
        created: new Date()
      })
        .then((res) => {
          this.presentAlertSuccess('Atendimento criado.','Sucesso')
        })
        .catch((err) =>{
          this.presentAlertError('Algo deu errado. Verifique sua conexão com a Internet.','Erro')
        })
    }else{
      // algum campo nao preenchido
      this.PresentToast('Todos os campos devem ser preenchidos.',4000);
    } 
  }

}
