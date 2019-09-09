import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_url = "http://localhost:8000"
  constructor(private http: HttpClient) { }


  login(loginForm: any){
    console.log(loginForm);
    return this.http.post(this.api_url + "/api/auth/login", loginForm);
  }
  signup(signupForm: any){
    console.log(signupForm);
    let data = {
      name: signupForm.first_name + " " + signupForm.last_name,
      password: signupForm.password,
      c_password: signupForm.password,
      email: signupForm.email
    }
    signupForm.username = signupForm.first_name + " " +signupForm.last_name
    return this.http.post(this.api_url + "/api/auth/signup", data);
  }
  getProfile(user_token){
    return this.http.post(this.api_url + "/api/auth/user", user_token);
  }
  getDoctors(){
    return this.http.get(this.api_url + "/api/getDoctors"); 
  }
  bookAppointment(){
    let data = {};
    return this.http.post(this.api_url + "/api/appointment", data);
  }
}
