import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.page.html',
  styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }
  async notification() {
    const alert = await this.alertController.create({
      message: "No Content yet.",
      buttons: ['OK']
    });

    await alert.present();

  }

}
