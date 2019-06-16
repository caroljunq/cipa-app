import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
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

  constructor(
    private navParams: NavParams,
    private modal: ModalController,
    private contentService: ContentService,
  ) {}

  ngOnInit() {
    this.category = this.navParams.get('title');
  } 

  ionViewDidEnter(){
    this.state = this.navParams.get('state');
    if(this.state.id){
      this.locations = this.contentService.getCitiesState(this.state);
    }else{
      this.locations = this.contentService.getStates();
    }
  }

  checkItem(location){
    this.selectedOption = location;
  }

  closeModal(){
    if(this.selectedOption.nome != ''){
      this.modal.dismiss(this.selectedOption);
    }
  }

  filterLocations(){
    const terms = this.terms.toLowerCase();
    this.locationsFiltered = this.locations.filter( it => {
      return it.nome.toLowerCase().includes(terms);
    });
  }
}

