import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { UserDataService } from '../../services/firebase/user-data.service';
import { UserInfo } from './../../services/models/user';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-generic-list-items',
  templateUrl: './generic-list-items.page.html',
  styleUrls: ['./generic-list-items.page.scss'],
})
export class GenericListItemsPage implements OnInit {

  select_type_values = ['fortalecimento','desgastes'];

  favorites = [];

  renderContent: any = {
    type: 'fortalecimento',
    category: '',
    group: '',
    data: []
  };

  dictionary = {
    type:{
      fortalecimento: 'Fortalecimento e Promoção',
      desgastes: 'Desgastes, Causas, Manifestações e Consequências'      
    },
    group: {
      crianca: 'Criança',
      familia: 'Família'
    },
    category:{
      intervencoes: 'Intervenções de Enfermagem',
      diagnosticos: 'Diagnósticos de Enfermagem'
    }
  }


 constructor(
    private contentService: ContentService,
    private userDataService: UserDataService,
    private storage: Storage,  
  ) { }

  ngOnInit() {
    this.renderContent = this.contentService.getRenderContent();

    //retrieve data from db
    this.userDataService.getUserFavorites()
      .subscribe(
        (user: UserInfo) => {
          // se há o campo favorites
          if(user.favorites){
            this.favorites = user.favorites
            this.storage.set('favorites', user.favorites);
          }else{
            this.getLocalStorageFavorites();
          }
        },
        (err) => {
          this.getLocalStorageFavorites();
        },
        () => {}
      )
  }

  getLocalStorageFavorites(){
    let localFavorites = this.storage.get('favorites').then((arr) => {
      if(arr){
        this.favorites = arr;
      }
    })
  }

  addFavoriteCard(event: Event, id: number){
    event.stopPropagation()
    event.preventDefault();
    this.favorites.push(id);
    this.userDataService.updateUserFavorites(this.favorites)
    this.storage.set('favorites', this.favorites);
  }

  removeFavoriteCard(event: Event, id: number){
    event.stopPropagation()
    event.preventDefault();
    let position = this.favorites.indexOf(id);

    if(position != -1){
      this.favorites.splice(position, 1);
      this.userDataService.updateUserFavorites(this.favorites);
      this.storage.set('favorites', this.favorites);
    }
  }

}
