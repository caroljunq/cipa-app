import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { UserDataService } from '../../services/firebase/user-data.service';
import { ContentService } from '../../services/content/content.service';
import { NavController } from '@ionic/angular';
import { Case } from './../../services/models/case';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.page.html',
  styleUrls: ['./new-case.page.scss'],
})
export class NewCasePage implements OnInit {

  case: Case = {
    db_id: '',
    id: '',
    gender: '',
    dob: '',
    notes: '',
    created: '',
    favorites: []
  }
  
  editing: boolean = false;

  constructor(
    public toastController: ToastController,
    private userDataService: UserDataService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    let renderObj = this.contentService.getRenderContent();
    
    if(renderObj.case.id != '' && renderObj.case.db_id != ''){
      this.editing = true;
      this.case = renderObj.case;

      let dob = renderObj.case.dob.split('/');

      // add 0 left number
      if(dob[1].length == 1){
        dob[1] = '0' + dob[1]; 
      }

      // add 0 left number
      if(dob[0].length == 1){
        dob[0] = '0' + dob[0]; 
      }
      this.case.dob = `${dob[2]}-${dob[1]}-${dob[0]}`
    }
    this.contentService.resetRenderContent(); 
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

  async presentAlertDelete(message,title){
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log("")
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.deleteCase();
          }
        }      
      ]
    });
    alert.present();
  }

  createNewCase(){
    let curDate = new Date();

    if(this.case.id && this.case.notes){
      if(this.validateIdField()){
        this.userDataService.addCase({
          id: this.case.id,
          db_id: this.case.db_id,
          gender: this.case.gender,
          dob: this.case.dob.valueOf(),
          notes: this.case.notes,
          favorites: this.case.favorites,
          created: `${curDate.getDate()}/${curDate.getMonth()}/${curDate.getFullYear()}`
        })
          .then((res) => {
            this.presentAlertSuccess('Atendimento criado.','Sucesso')
          })
          .catch((err) =>{
            this.presentAlertError('Algo deu errado. Verifique sua conexão com a Internet.','Erro')
          })
      }else{
        this.PresentToast('O campo de Identificação deve conter apenas letras ou números.', 2000);
      }
    }else{
      // algum campo nao preenchido
      this.PresentToast('Todos os campos devem ser preenchidos.', 3000);
    }
  }

  saveCaseChanges(){
    if(this.validateIdField()){

      const editingCaseSuccess = this.userDataService.editCase({
        id: this.case.id,
        db_id: this.case.db_id,
        gender: this.case.gender,
        dob: this.case.dob.valueOf(),
        notes: this.case.notes,
        created: this.case.created,
        favorites: this.case.favorites
      })

      if(editingCaseSuccess){
        this.presentAlertSuccess('Atendimento editado.', 'Sucesso');
      }else{
        this.presentAlertError('Algo deu errado. Verifique sua conexão com a Internet.','Erro')
      }
    }else{
      this.PresentToast('O campo de Identificação deve conter apenas letras e/ou números.', 2000);
    }
  }

  callDeleteCase(){
    this.presentAlertDelete('Deseja excluir este atendimento?',"");
  }

  deleteCase(){
    this.userDataService.deleteCase(this.case.db_id)
      .then((res) => {
        this.presentAlertSuccess('Atendimento excluído.','Sucesso')
      })
      .catch((err) =>{
        this.presentAlertError('Algo deu errado. Verifique sua conexão com a Internet.','Erro')
      })
  }

  useCase(){
    console.log(this.case.db_id)
  }

  validateIdField(){
    return /^[A-Za-z0-9? ]+$/.test(this.case.id)
  }
}
