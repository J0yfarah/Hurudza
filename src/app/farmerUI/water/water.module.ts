import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterPageRoutingModule } from './water-routing.module';

import { WaterPage } from './water.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaterPageRoutingModule
  ],
  declarations: [WaterPage]
})
export class WaterPageModule {}
