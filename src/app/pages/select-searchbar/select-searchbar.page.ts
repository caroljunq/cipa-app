import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-select-searchbar',
  templateUrl: './select-searchbar.page.html',
  styleUrls: ['./select-searchbar.page.scss'],
})
export class SelectSearchbarPage implements OnInit {

  locations = [];
  selectedOption = null;
  category: string = '';
  state: any;
  locationsFiltered = [];
  terms: string = '';
  type: string = '';

  constructor(
    private navParams: NavParams,
    private modal: ModalController,
    private contentService: ContentService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.category = this.navParams.get('title');
  } 

  ionViewDidEnter(){
    this.state = this.navParams.get('state');
    this.type = this.navParams.get('type');

    if(this.state.id && this.type == 'cidade'){
      this.locations = this.contentService.getCitiesState(this.state);
    }else{
      this.locations = this.contentService.getStates();
      if(this.state.id){
        this.selectedOption = this.state;
      }
    }
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

  checkItem(location){
    this.selectedOption = location;
  }

  closeModal(){
    if(this.selectedOption && this.selectedOption.nome != ''){
      this.modal.dismiss(this.selectedOption);
    }else{
      this.PresentToast('Selecione um local.',2000);
    }
  }

  filterLocations(){
    const terms = this.terms.toLowerCase();
    this.locationsFiltered = this.locations.filter( it => {
      return it.nome.toLowerCase().includes(terms);
    });
  }
}

