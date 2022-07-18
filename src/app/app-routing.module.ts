import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./farmerUI/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./farmerUI/weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'field',
    loadChildren: () => import('./farmerUI/field/field.module').then( m => m.FieldPageModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./farmerUI/stats/stats.module').then( m => m.StatsPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./farmerUI/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'area',
    loadChildren: () => import('./farmerUI/area/area.module').then( m => m.AreaPageModule)
  },
  {
    path: 'water',
    loadChildren: () => import('./farmerUI/water/water.module').then( m => m.WaterPageModule)
  },
  {
    path: 'plant',
    loadChildren: () => import('./farmerUI/plant/plant.module').then( m => m.PlantPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
