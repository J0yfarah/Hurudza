import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaPageRoutingModule } from './area-routing.module';

import { AreaPage } from './area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaPageRoutingModule
  ],
  declarations: [AreaPage]
})
export class AreaPageModule {}
