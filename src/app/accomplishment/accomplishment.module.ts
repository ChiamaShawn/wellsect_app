import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccomplishmentPage } from './accomplishment.page';

const routes: Routes = [
  {
    path: '',
    component: AccomplishmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccomplishmentPage]
})
export class AccomplishmentPageModule {}
