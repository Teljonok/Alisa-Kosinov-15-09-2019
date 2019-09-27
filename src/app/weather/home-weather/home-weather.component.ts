import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {WeatherState} from '../store/reducers';
import {getWeatherSearchData, getWeatherStateData} from '../store/reducers/weather.selectors';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {LoadWeather, LoadWeatherSearch, ToggleFavorite} from '../store/actions';

@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeWeatherComponent implements OnInit, OnDestroy {
  weatherData$: Observable<any>;
  isFavorite = false;
  weather;
  degreeType;
  validInput = false;

  constructor(public store: Store<WeatherState>) {
  }


  ngOnInit() {
    this.weatherData$ = this.store.select(getWeatherStateData);
    this.store.dispatch(new LoadWeather());

    this.degreeType = 'celsius';

  }

  onSearch(city: any) {
    this.weatherData$ = this.store.select(getWeatherSearchData);
    this.store.dispatch(new LoadWeatherSearch(city));
  }


  toggleFavorite() {
    this.weatherData$
      .pipe(untilDestroyed(this))
      .subscribe(data => {
          this.store.dispatch(new ToggleFavorite(data.main));
        }
      );
    this.isFavorite = !this.isFavorite;

  }

  buildWeatherIcon(weatherType) {
    let icon;
    switch (weatherType) {
      case 'Sunny':
        icon = 'fas fa-sun';
        break;
      case 'Clouds':
        icon = 'fas fa-cloud-rain';
        break;
      case 'Rain':
        icon = 'fas fa-cloud-rain';
        break;
      default:
        icon = 'fas fa-sun';
    }
    return icon;
  }

  ngOnDestroy() {
  }

  checkValues(value: string) {
    this.validInput = !!(value && value.match('[\u0000-\u007F]'));
  }
}
