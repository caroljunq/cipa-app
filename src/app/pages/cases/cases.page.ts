import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserDataService } from '../../services/firebase/user-data.service';
import { ContentService } from '../../services/content/content.service';
import { UserInfo } from './../../services/models/user';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage implements OnInit {

  cases_id: Array<string> = [];
  cases: any;

  selectedCase: any = {
    id: '',
    displayName: ''
  };

  constructor(
    private navCtrl: NavController,
    private userDataService: UserDataService,
    private contentService: ContentService,
    private storage: Storage,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.contentService.resetRenderContent();
    //retrieve data from db
    this.userDataService.getUserInfo()
      .subscribe(
        (user: UserInfo) => {
          if(user.cases){
            this.cases_id = Object.keys(user.cases);
            this.cases = user.cases;
          }
        },
        (err) => {
          this.PresentToast('Algo deu errado. Tente novamente.',2000);
        },
        () => {}
      )
  }

  ionViewWillEnter(){
    this.selectedCase = {
      id: '',
      displayName: ''
    };
    this.storage.get('dbIdCase').then((id) => {
      if(id != null && id != ''){
        this.selectedCase.id = id;
        this.selectedCase.displayName = id.split('_')[0]
      }
    })
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

  createCase(){
    this.contentService.resetRenderContent();
    this.navCtrl.navigateForward('/new-case');
  }

  editCase(case_id: string){
    this.contentService.setRenderCase(this.cases[case_id]);
    this.navCtrl.navigateForward('/new-case');
  }

  cleanCase(){
    this.storage.set('dbIdCase','')
      .then((res) =>{
        this.selectedCase = {
          id: '',
          displayName: ''
        };
        this.PresentToast('Atendimento desabilitado com sucesso.',3000);
      })
      .catch((error) =>{
        this.PresentToast('Não foi possível desabilitar atendimento.',3000);
      })
  }
}
