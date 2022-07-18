import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldPage } from './field.page';

const routes: Routes = [
  {
    path: '',
    component: FieldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldPageRoutingModule {}
