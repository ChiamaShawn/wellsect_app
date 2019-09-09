import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsHospitalPage } from './tabs-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: TabsHospitalPage,
    children: [
      { path: 'hospitals', loadChildren: '../hospitals/hospitals.module#HospitalsPageModule' },
      { path: 'hospital-listing', loadChildren: '../hospital/hospital.module#HospitalPageModule' }
    ]
  },
 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsHospitalPage]
})
export class TabsHospitalPageModule {}
