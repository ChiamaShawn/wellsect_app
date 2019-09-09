import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from "../services/data.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: any;
  constructor(public router: Router, private data_service: DataService, private alertCtrl: AlertController) {
    const email = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      email:email,
      password: password
    }
    )
   }
   presentAlert() {
    const alertController = document.querySelector('ion-alert-controller');
    alertController.componentOnReady();
  }

  ngOnInit() {
  }

  openLoginPage(){
    this.router.navigateByUrl('/login');
  }
  goToHomePage(){
    this.router.navigateByUrl('/home');
  }
 
  loginRequest(){
    this.data_service.login(this.loginForm.value).subscribe(response => {
      console.log(response);
      if(response['access_token']){
        localStorage.setItem('user_token', response['access_token']);
        this.router.navigateByUrl('/home')
      } else {
        console.log('error');
      }
      
    },  err => {
      console.log(err);
    })
  }
  
}
