import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
declare var google;
@Component({
  selector: "app-hospitals",
  templateUrl: "./hospitals.page.html",
  styleUrls: ["./hospitals.page.scss"]
})
export class HospitalsPage implements OnInit {
  @ViewChild("map", {static:false}) mapElement: ElementRef;
  map: any;
  places = [];
  markers: any = [];
  constructor() {}

  ngOnInit() {
    this.loadMap();
  }
  loadMap() {
    console.log("loading");
    Geolocation.getCurrentPosition()
      .then(resp => {
        console.log(resp);
        let latitude = resp.coords.latitude;
        let longitude = resp.coords.longitude;
        let LatLng = new google.maps.LatLng(latitude, longitude);
          let mapOptions = {
            center: LatLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );

        this.getHospitals(LatLng).then(
          (results: Array<any>) => {
            this.places = results;
            for (let i = 0; i < results.length; i++) {
              this.createMarker(results[i]);
            }
          },
          status => console.log(status)
        );

        this.addMarker(latitude, longitude);
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
  addMarker(lat: number, lng: number): void {
    let latLng = new google.maps.LatLng(lat, lng);

    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng,
      icon: "./assets/111-512.png"
    });

    this.markers.push(marker);
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
  createMarker(place) {
    console.log(place);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location,
      icon: "./assets/hospital.png"
    });
    var infoWindowContent =
      '<div id="content"><h3 id="firstHeading" class="firstHeading">' +
      place.name +
      "</h3></div>";
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener("click", () => {
      infoWindow.open(this.map, marker);
    });
  }
}
