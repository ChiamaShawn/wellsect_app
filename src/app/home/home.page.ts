import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PopoverController } from '@ionic/angular';
// import { PopoverComponent } from '../../component/popover/popover.component';

import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(public router: Router, private iab: InAppBrowser) {}
  goToChatBot(){
    this.router.navigateByUrl("/chatbot");
  }
  goToHospitalsListing() {
    this.router.navigateByUrl("/tabs-hospital");
  }
  goToPharmaciesListing() {
    this.router.navigateByUrl("/tabs-hospital");
  }
  openBrowser() {
    const browser = this.iab.create("http://wellsect.storenvy.com");

    browser.on("loadstop").subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });

  }
  goToMorePage(){
    this.router.navigateByUrl("/more");
  }
  goToLibrary(){
    this.router.navigateByUrl('/library');
  }
  callPage(){
    this.router.navigateByUrl("/call");
  }
  goToPrograms(){
    this.router.navigateByUrl("/programs");
  }
  goToConsult(){
    this.router.navigateByUrl("/consult");
  }
  goToReminders(){
    this.router.navigateByUrl("/tips");
  }
}
