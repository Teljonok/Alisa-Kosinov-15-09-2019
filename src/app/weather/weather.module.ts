
import { NgModule } from '@angular/core';
import { HomeWeatherComponent } from './home-weather/home-weather.component';
import { FavoriteWeatherComponent } from './favorite-weather/favorite-weather.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { WeatherDetailComponent } from './home-weather/weather-detail/weather-detail.component';

@NgModule({
  declarations: [
    HomeWeatherComponent,
    FavoriteWeatherComponent,
    WeatherDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: []
})
export class WeatherModule { }
