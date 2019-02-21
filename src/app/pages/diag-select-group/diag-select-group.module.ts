import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiagSelectGroupPage } from './diag-select-group.page';

const routes: Routes = [
  {
    path: '',
    component: DiagSelectGroupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiagSelectGroupPage]
})
export class DiagSelectGroupPageModule {}
