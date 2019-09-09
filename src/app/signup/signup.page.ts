import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { DataService } from "../services/data.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: any;

  constructor(private data_service: DataService, private nav: Router) {
    const first_name = new FormControl('', Validators.required);
    const last_name = new FormControl('', Validators.required);
    const email = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);

    this.signupForm = new FormGroup({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    })
   }

  ngOnInit() {
  }
  signupSubmit(){
    this.data_service.signup(this.signupForm.value).subscribe(response => {
      console.log(response);
      this.nav.navigateByUrl('/login'); 
    });
  }

}
