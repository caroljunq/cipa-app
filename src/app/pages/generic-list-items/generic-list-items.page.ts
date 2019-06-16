import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { UserDataService } from '../../services/firebase/user-data.service';
import { UserInfo } from './../../services/models/user';
import { Storage } from '@ionic/storage';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-generic-list-items',
  templateUrl: './generic-list-items.page.html',
  styleUrls: ['./generic-list-items.page.scss'],
})
export class GenericListItemsPage implements OnInit {

  select_type_values = ['fortalecimento','desgastes'];

  favoritesIds = [];
  favoriteItems = [];

  renderContent: any = {
    type: 'fortalecimento',
    category: '',
    group: '',
    data: []
  };

  selectedCase: any = {
    id: '',
    displayName: ''
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
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {

    this.renderContent = this.contentService.getRenderContent();
    this.renderContent.type = 'fortalecimento';

    this.selectedCase = {
      id: '',
      displayName: ''
    };
    this.storage.get('dbIdCase')
      .then((id) => {
        if(id != null && id != ''){
          this.selectedCase.id = id;
          this.selectedCase.displayName = id.split('_')[0]
        }
        this.getComponentFavorites();
      })
      .catch((err) =>{
        this.presentAlertError('Algo deu errado. Tente novamente.','Erro','/home');
      })
  }

  async presentAlertError(message,title,page_route){
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

  // decide se os favoritos a serem carregados são o global 
  getComponentFavorites(){
     this.userDataService.getUserInfo()
      .subscribe(
        (user: UserInfo) => {

          if(this.selectedCase.id != ''){
            if(user.cases[this.selectedCase.id]){
              // se tem atendimento selecionado e favoritos nesse case
              this.favoritesIds = user.cases[this.selectedCase.id].favorites;
              this.favoriteItems = this.getFavoriteItems();
            }
          }else if(this.selectedCase.id == '' && user.favorites){
            //se nao tem atendimento selecionado, mas existe os favoritos globais
            this.favoritesIds = user.favorites;
            this.favoriteItems = this.getFavoriteItems();
          }
        },
        (err) => {
          this.presentAlertError('Algo deu errado. Tente novamente.','Erro','/home')
        },
        () => {}
      )
  }

  addFavoriteCard(event: Event, id: number){
    event.stopPropagation();
    event.preventDefault();
    this.favoritesIds.push(id);
    this.updateFavoritesCards();
  }

  removeFavoriteCard(event: Event, id: number){
    event.stopPropagation()
    event.preventDefault();
    let position = this.favoritesIds.indexOf(id);

    if(position != -1){
      this.favoritesIds.splice(position, 1);
      this.updateFavoritesCards();
    }
  }

  updateFavoritesCards(){
    if(this.selectedCase.id != ''){
      this.userDataService.updateSelectedCaseFavorites(this.selectedCase.id, this.favoritesIds);
    }else{
      this.userDataService.updateUserGlobalFavorites(this.favoritesIds)
    }
    this.favoriteItems = this.getFavoriteItems();
  }

  getFavoriteItems(){
    return this.renderContent.data.filter(el =>{
      return this.favoritesIds.includes(el.id)
    })
  }
}
