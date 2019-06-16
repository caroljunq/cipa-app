import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-select-searchbar',
  templateUrl: './select-searchbar.page.html',
  styleUrls: ['./select-searchbar.page.scss'],
})
export class SelectSearchbarPage implements OnInit {

  locations = [];
  selectedOption = null;
  category: string = '';

  constructor(
    private navParams: NavParams,
    private modal: ModalController
  ) {}

  ngOnInit() {
    this.locations = this.navParams.get('items');
    this.category = this.navParams.get('title');
  } 

  checkItem(location){
    this.selectedOption = location;
  }

  closeModal(){
    if(this.selectedOption.nome != ''){
      this.modal.dismiss(this.selectedOption);
    }
  }
}
