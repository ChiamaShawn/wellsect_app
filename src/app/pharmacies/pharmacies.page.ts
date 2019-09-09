import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
declare var google; 
@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.page.html',
  styleUrls: ['./pharmacies.page.scss'],
})
export class PharmaciesPage implements OnInit {
  @ViewChild('map', {static:false}) mapElement: ElementRef;
  map: any;
  tab1Root
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }
  loadMap(){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}
