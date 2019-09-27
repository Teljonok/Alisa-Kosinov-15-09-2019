import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }


  getWeatherData(city: string): Observable<any> {
    //TODO local city
    city = city || 'Tel Aviv';
    const api_key = '4de493cca8b2a993d11df65848dac270';
    const units = 'metric';
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${api_key}&units=${units}`)
      .pipe(
        map((detail) => {
          let weatherData = {};
          weatherData['main'] = {};
          weatherData['main'].cityId = detail['city'].id;
          weatherData['main'].city = detail['city'].name;
          const timeText = '12:00:00';
          let filteredItems = detail['list'].filter(item => {
            return item.dt_txt.includes(timeText);
          });

          weatherData['days'] = [];
          filteredItems.forEach(item => {
            weatherData['days'].push({
              date: item.dt_txt,
              degree: item.main.temp,
              weatherType: item.weather[0].main
            });
          });

          weatherData['main'].degree = weatherData['days'][0].degree;
          weatherData['main'].weatherType = weatherData['days'][0].weatherType;
          return {...weatherData};
        }),
      );

  }

  getFavoritesLocations(): Observable<any> {
    const favoritesLocations = JSON.parse(localStorage.getItem('favorites') || '[]');
    //TODO
    return favoritesLocations;
  }

  toggleFavorite(cityData) {

    let storedData = JSON.parse(localStorage.getItem(`favorites`) || '[]');

    const isFavoriteExist = storedData.some(city => city['cityId'] === cityData.cityId);

    if (isFavoriteExist) {
      storedData = storedData.filter(value => value['cityId'] !== cityData.cityId);
    } else {
      storedData.push(cityData);
    }

    localStorage.setItem('favorites', JSON.stringify(storedData));
    return true;
  }
}
