import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWeatherComponent } from './weather/home-weather/home-weather.component';
import { FavoriteWeatherComponent } from './weather/favorite-weather/favorite-weather.component';

const routes: Routes = [
  {
    path: '',
    component: HomeWeatherComponent
  },
  {
    path: 'home',
    component: HomeWeatherComponent
  },
  {
    path: 'favorite',
    component: FavoriteWeatherComponent
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
