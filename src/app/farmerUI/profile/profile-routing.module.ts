import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        path: '',
        loadChildren: () => import('../weather/weather.module').then(m => m.WeatherPageModule)
      },
      {
        path: 'weather',
        loadChildren: () => import('../weather/weather.module').then(m => m.WeatherPageModule)
      },
      {
        path: 'field',
        loadChildren: () => import('../field/field.module').then(m => m.FieldPageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../blog/blog.module').then(m => m.BlogPageModule)
      },
      {
        path: 'stats',
        loadChildren: () => import('../stats/stats.module').then(m => m.StatsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
