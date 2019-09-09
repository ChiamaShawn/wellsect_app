import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
declare var google;
@Component({
  selector: "app-hospital",
  templateUrl: "./hospital.page.html",
  styleUrls: ["./hospital.page.scss"]
}) 

export class HospitalPage implements OnInit {
  @ViewChild("map",{static:false}) mapElement: ElementRef;
  map: any;
  hospitals: any;
  constructor() {}

  ngOnInit() {
    
    
    Geolocation.getCurrentPosition().then(resp => {
      console.log(resp);
      let latitude = resp.coords.latitude;
      let longitude = resp.coords.longitude;
      let latLng = new google.maps.LatLng(latitude, longitude);
      let mapOptions = {
        center: latLng
      };
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        mapOptions
      );
      this.getHospitals(latLng).then(
        (results: Array<any>) => {
          this.hospitals = results;
          console.log(this.hospitals);  
        },
        status => console.log(status)
      );;
    });
  }

  getHospitals(latLng) {
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
      location: latLng,
      radius: 8047,
      types: ["hospital"]
    };
    return new Promise((resolve, reject) => {
      service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }
      });
    });
  }
}
