import { Action } from '@ngrx/store';

export const LOAD_WEATHER = '[Location] Load ';
export const LOAD_WEATHER_FAIL = '[Location] Load  Fail';
export const LOAD_WEATHER_SUCCESS = '[Location] Load  Success';
export const LOAD_WEATHER_SEARCH = '[Location] Load  Weather by Search';

export const TOGGLE_FAVORITE = '[Favorites] Add/Remove Location from Favorites';
export const LOAD_FAVORITES = '[Favorites] Load';
export const LOAD_FAVORITES_SUCCESS = '[Favorites] Load  Success';


export class LoadWeather implements Action {
  readonly type = LOAD_WEATHER;
}

export class LoadWeatherFail implements Action {
  readonly type = LOAD_WEATHER_FAIL;
  constructor(public payload: any) {}
}

export class LoadWeatherSuccess implements Action {
  readonly type = LOAD_WEATHER_SUCCESS;
    constructor(public payload: string) {}
}

export class ToggleFavorite implements Action {
  readonly type = TOGGLE_FAVORITE;
  //todo interface
  constructor(public payload: any) {}
}

export class LoadWeatherSearch implements Action {
  readonly type = LOAD_WEATHER_SEARCH;
  constructor(public payload: string) {}
}

export class LoadFavoriteLocations implements Action {
  readonly type = LOAD_FAVORITES;
}

export class LoadFavoriteLocationsSuccess implements Action {
  readonly type = LOAD_FAVORITES_SUCCESS;
  constructor(public payload: any) {}
}


export type WeatherActions = LoadWeather | LoadWeatherFail | LoadWeatherSuccess | LoadWeatherSearch| ToggleFavorite| LoadFavoriteLocations |LoadFavoriteLocationsSuccess;
