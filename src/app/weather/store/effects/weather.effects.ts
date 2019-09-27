import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';
import * as WeatherActions from '../actions/weather.actions';
import {WeatherService} from '../../weather.service';
import {Action} from '@ngrx/store';


@Injectable()
export class WeatherEffects {
  constructor(public actions$: Actions, public weatherService: WeatherService) {
  }

  @Effect()
  loadData$: Observable<Action> = this.actions$.pipe(
    ofType(WeatherActions.LOAD_WEATHER),
    switchMap((action: any) => {
      return this.weatherService.getWeatherData(action.payload)
        .pipe(
          map(weatherData => ({type: WeatherActions.LOAD_WEATHER_SUCCESS, payload: weatherData})),
          catchError(() => of({type: WeatherActions.LOAD_WEATHER_FAIL}))
        );
    })
  );

  @Effect()
  loadSearchData$: Observable<Action> = this.actions$.pipe(
    ofType(WeatherActions.LOAD_WEATHER_SEARCH),
    switchMap((action: any) => {
      return this.weatherService.getWeatherData(action.payload)
        .pipe(
          map(weatherData => ({type: WeatherActions.LOAD_WEATHER_SUCCESS, payload: weatherData})),
          catchError(() => of({type: WeatherActions.LOAD_WEATHER_FAIL}))
        );
    })
  );


  @Effect({dispatch: false})
  toggleFavorites$ = this.actions$.pipe(
    ofType(WeatherActions.TOGGLE_FAVORITE),
    map((action: WeatherActions.ToggleFavorite) => {
      return this.weatherService.toggleFavorite(action.payload);
    })
  );

  @Effect()
    loadFavorites$ = this.actions$.pipe(
    ofType(WeatherActions.LOAD_FAVORITES),
    map((action: WeatherActions.LoadFavoriteLocations) => {
      const data = this.weatherService.getFavoritesLocations();
      return {type: WeatherActions.LOAD_FAVORITES_SUCCESS, payload: data}

    }),

  );


}







