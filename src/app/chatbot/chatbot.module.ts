import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatbotPage } from './chatbot.page';
import { AccomplishmentPage } from './acomplishment.page';
import { LogPage } from './log.page';
import { EmotionsPage } from './emotions.page';
// import { }

const routes: Routes = [
  {
    path: '',
    component: ChatbotPage
  }
];

@NgModule({
  entryComponents: [
    AccomplishmentPage,
    LogPage,
    EmotionsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatbotPage, AccomplishmentPage, LogPage,EmotionsPage]
})
export class ChatbotPageModule {}
