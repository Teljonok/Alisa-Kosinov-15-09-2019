import * as weatherActions from '../actions/weather.actions';


export interface WeatherState {
  locations: any;
  favorites: any;
  loading: boolean;

}

export const initialState: WeatherState = {
  locations: {},
  favorites: [],
  loading: false
};


export function weatherReducer(state = initialState, action: weatherActions.WeatherActions): WeatherState {

  switch (action.type) {

    case weatherActions.LOAD_WEATHER : {
           return {
        ...state,
        loading: true
      };
    }

    case weatherActions.LOAD_WEATHER_FAIL : {
            return {
        ...state,
        loading: false
      };
    }

    case weatherActions.LOAD_WEATHER_SUCCESS : {
           const successAction = action as weatherActions.LoadWeatherSuccess;
      const weatherData = successAction.payload;

      return {
        ...state,
        loading: false,
        locations: weatherData

      };
    }

    case weatherActions.LOAD_WEATHER_SEARCH : {
       const searchAction = action as weatherActions.LoadWeatherSearch;
      const weatherData = searchAction.payload;

      return {
        ...state,
        loading: false,
        locations: weatherData

      };
    }

    case weatherActions.LOAD_FAVORITES: {
      return {
        ...state,
        loading: false
      };
    }

    case weatherActions.LOAD_FAVORITES_SUCCESS: {
      return {
        ...state,
        loading: false,
        favorites: action.payload
      };
    }

    case weatherActions.TOGGLE_FAVORITE: {
     return {
        ...state,
        loading: false,
      };
    }

    default:
      return{
        ...state
      } ;

  }
}


export const getWeatherLoading = (state: WeatherState) => {
  return state.loading;
};

export const getWeatherData = (state: WeatherState) => {
  return state.locations;
};

export const getWeatherSearchData = (state: WeatherState) => {
  return state.locations;
};

export const getFavoritesData = (state: WeatherState) => {
  return state.favorites;
};
