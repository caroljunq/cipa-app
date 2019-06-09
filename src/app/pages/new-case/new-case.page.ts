import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { UserDataService } from '../../services/firebase/user-data.service';
import { ContentService } from '../../services/content/content.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.page.html',
  styleUrls: ['./new-case.page.scss'],
})
export class NewCasePage implements OnInit {

  id: string; 
  dob: string = '2000-01-01';
  gender: string = 'Feminino';
  notes: string;
  editing: boolean = false;
  favorites: any = [];
  db_id: string = '';
  created: string = '';

  constructor(
    public toastController: ToastController,
    private userDataService: UserDataService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    let renderObj = this.contentService.getRenderContent();
    
    if(renderObj.case.id != ''){
      this.editing = true;
      this.id = renderObj.case.id;
      this.gender = renderObj.case.gender;
      this.notes = renderObj.case.notes;
      let dob = renderObj.case.dob.split('/');
      this.favorites = renderObj.case.favorites;
      this.db_id = renderObj.case.db_id;
      this.created = renderObj.case.created;

      // add 0 left number
      if(dob[1].length == 1){
        dob[1] = '0' + dob[1]; 
      }

      // add 0 left number
      if(dob[0].length == 1){
        dob[0] = '0' + dob[0]; 
      }

      this.dob = `${dob[2]}-${dob[1]}-${dob[0]}`
      this.contentService.resetRenderContent();
    }

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
            this.navCtrl.navigateForward('/cases');
          }
        },      
      ]
    });
    alert.present();
  }

  createNewCase(){
    let curDate = new Date();
    if(this.id && this.notes){
      let x = this.userDataService.addCase({
        id: this.id,
        gender: this.gender,
        dob: this.dob.valueOf(),
        notes: this.notes,
        favorites: [],
        created: `${curDate.getDate()}/${curDate.getMonth()}/${curDate.getFullYear()}`
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

  saveCaseChanges(){
    const editingCaseSuccess = this.userDataService.editCase({
      id: this.id,
      gender: this.gender,
      dob: this.dob.valueOf(),
      notes: this.notes,
      created: this.created,
      favorites: this.favorites
    },this.db_id)

  if(editingCaseSuccess){
    this.presentAlertSuccess('Atendimento editado.', 'Sucesso');
  }else{
    this.presentAlertError('Algo deu errado. Verifique sua conexão com a Internet.','Erro')
  }
}
}
