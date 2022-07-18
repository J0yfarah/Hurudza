import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss'],
})
export class PlantPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
 async dismiss(){
   await this.modalCtrl.dismiss();
 }
}
