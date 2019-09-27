import {Component, OnInit} from '@angular/core';
import {getFavoritesData, getWeatherStateData} from '../store/reducers/weather.selectors';
import {LoadFavoriteLocations, LoadWeather} from '../store/actions';
import {Store} from '@ngrx/store';
import {WeatherState} from '../store/reducers';
import {Observable} from 'rxjs';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-favorite-weather',
  templateUrl: './favorite-weather.component.html',
  styleUrls: ['./favorite-weather.component.scss']
})
export class FavoriteWeatherComponent implements OnInit {
  favorites$: Observable<any>;

  constructor(public store: Store<WeatherState>, private weatherService: WeatherService) {
  }

  ngOnInit() {

    this.favorites$ = this.store.select(getFavoritesData);
    this.store.dispatch(new LoadFavoriteLocations());
  }
}
