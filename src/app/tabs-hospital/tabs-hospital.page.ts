import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-hospital',
  templateUrl: './tabs-hospital.page.html',
  styleUrls: ['./tabs-hospital.page.scss'],
})
export class TabsHospitalPage implements OnInit {
  tab1: any = 'HospitalsPage';
  tab2: any = 'ListPage';
  tab3: any = 'PharmaciesPage';
  tab4: any = 'ListPage';
  constructor() { }

  ngOnInit() {
  }

}
