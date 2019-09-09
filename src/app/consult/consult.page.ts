import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-consult',
  templateUrl: './consult.page.html',
  styleUrls: ['./consult.page.scss'],
})
export class ConsultPage implements OnInit {
  doctors:any;
  constructor(private alertController:AlertController, private data_service: DataService) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Request Received',
      message: "We'll get back to you as soon as possible on the doctor's availability.",
      buttons: ['OK']
    });

    await alert.present();
  }
  getDoctors(){
    this.data_service.getDoctors().subscribe(response => {
      this.doctors = response;
      
    })
  }
}
