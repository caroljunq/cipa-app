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
    this.case = renderObj.case;
   
    if(renderObj.case.id != '' && renderObj.case.db_id != ''){
      this.editing = true;
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

  async presentAlertSuccess(message,title,page_route){
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            this.navCtrl.navigateForward(page_route);
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

    if(this.case.id && this.case.notes && this.case.gender && this.case.dob){
      if(this.validateIdField()){
        this.userDataService.addCase({
          id: this.case.id,
          db_id: this.case.db_id,
          gender: this.case.gender,
          dob: this.case.dob.valueOf(),
          notes: this.case.notes,
          favorites: this.case.favorites,
          created: `${curDate.getDate()}/${curDate.getMonth() + 1}/${curDate.getFullYear()}`
        })
        this.presentAlertSuccess('Atendimento criado.','Sucesso','/cases')
      }else{
        this.PresentToast('O campo de Identificação deve conter apenas letras ou números.', 2000);
      }
    }else{
      // algum campo nao preenchido
      this.PresentToast('Todos os campos devem ser preenchidos.', 3000);
    }
  }

  saveCaseChanges(){
    if(this.case.id && this.case.notes && this.case.gender && this.case.dob){
      if(this.validateIdField()){
        this.userDataService.deleteCase(this.case.db_id);
        this.userDataService.addCase({
          id: this.case.id,
          db_id: this.case.db_id,
          gender: this.case.gender,
          dob: this.case.dob.valueOf(),
          notes: this.case.notes,
          created: this.case.created,
          favorites: this.case.favorites
        }) 
        this.presentAlertSuccess('Atendimento editado.', 'Sucesso','/cases');
      }else{
        this.PresentToast('O campo de Identificação deve conter apenas letras e/ou números.', 2000);
      }
    }else{
      this.PresentToast('Todos os campos devem ser preenchidos.', 3000);
    }
  }

  callDeleteCase(){
    this.presentAlertDelete('Deseja excluir este atendimento?',"");
  }

  deleteCase(){
    this.userDataService.deleteCase(this.case.db_id);
    this.presentAlertSuccess('Atendimento excluído.','Sucesso','/cases');      
  }

  useCase(){
    this.contentService.setSelectedCase(this.case.db_id)
      .then((res) => {
        this.presentAlertSuccess('Atendimento selecionado.','Sucesso','/home');
      })
      .catch((err) =>{
        this.PresentToast('Erro ao selecionar atendimento.',2000);
      })
  }

  validateIdField(){
    return /^[A-Za-z0-9? ]+$/.test(this.case.id)
  }
}
