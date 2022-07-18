import { WaterPage } from './../water/water.page';
import { PlantPage } from './../plant/plant.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AreaPage } from '../area/area.page';

@Component({
  selector: 'app-field',
  templateUrl: './field.page.html',
  styleUrls: ['./field.page.scss'],
})
export class FieldPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  async gotoarea(){
    
    const modal = await this.modalCtrl.create({
      component: AreaPage,
      animated: true,
      mode: 'md',
      backdropDismiss: false,
      cssClass: 'area-modal',
    })

    return await modal.present();
   
  }
  async gotoplant(){
    
    const modal = await this.modalCtrl.create({
      component: PlantPage,
      animated: true,
      mode: 'md',
      backdropDismiss: false,
      cssClass: 'plant-modal',
    })

    return await modal.present();
   
  }
  async gotowater(){
    
    const modal = await this.modalCtrl.create({
      component: WaterPage,
      animated: true,
      mode: 'md',
      backdropDismiss: false,
      cssClass: 'plant-modal',
    })

    return await modal.present();
   
  }
}
