import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SupportLocationsPage } from './support-locations.page';

const routes: Routes = [
  {
    path: '',
    component: SupportLocationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SupportLocationsPage]
})
export class SupportLocationsPageModule {}
