import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantPageRoutingModule } from './plant-routing.module';

import { PlantPage } from './plant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantPageRoutingModule
  ],
  declarations: [PlantPage]
})
export class PlantPageModule {}
