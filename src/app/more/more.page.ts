import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(private router: Router, private iab: InAppBrowser) { }

  ngOnInit() {
  }
  openProfilePage(){
    this.router.navigateByUrl("/profile");
  }
  openPricingPage(){
    this.router.navigateByUrl("/pricing");
  }
  openHelpCenterPage(){
    this.router.navigateByUrl("/help");
  }
  openPrivacyPolicyPage(){ 

  }
  openTermsOfUsePage(){

  }

  logout(){
    
  }
}

