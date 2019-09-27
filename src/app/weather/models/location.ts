export interface Location {
  currentWeather:currentWeather
  days: dayWeather[]
}
export interface currentWeather {
  id?: number;
  name?: string;
  degree?: number;
  weatherType?: string;
  degreeType?: 'celsius' | 'fahrenheit'

}

export interface dayWeather {
  degree?: number;
  date?: Date;
  weatherType?: string;
}
