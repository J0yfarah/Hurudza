import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldPageRoutingModule } from './field-routing.module';

import { FieldPage } from './field.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldPageRoutingModule
  ],
  declarations: [FieldPage]
})
export class FieldPageModule {}
