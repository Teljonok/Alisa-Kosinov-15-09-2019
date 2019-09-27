import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as weatherReducer from './weather.reducers';

export interface State {
  weather: weatherReducer.WeatherState;
}

export const reducers: ActionReducerMap<State> = {
  weather: weatherReducer.weatherReducer
};

export const selectWeatherState = createFeatureSelector('weather');

export const getWeatherStateData = createSelector(selectWeatherState, weatherReducer.getWeatherData);
export const getWeatherSearchData = createSelector(selectWeatherState, weatherReducer.getWeatherSearchData);
export const getWeatherStateLoading = createSelector(selectWeatherState, weatherReducer.getWeatherLoading);

export const getFavoritesData = createSelector(selectWeatherState, weatherReducer.getFavoritesData);

