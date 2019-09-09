import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { IonicModule } from '@ionic/angular';

import { MorePage } from './more.page';

const routes: Routes = [
  {
    path: '',
    component: MorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MorePage],
  providers: [
    InAppBrowser
  ]
})
export class MorePageModule {}
