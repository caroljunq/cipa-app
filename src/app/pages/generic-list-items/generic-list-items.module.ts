import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GenericListItemsPage } from './generic-list-items.page';

const routes: Routes = [
  {
    path: '',
    component: GenericListItemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GenericListItemsPage]
})
export class GenericListItemsPageModule {}
