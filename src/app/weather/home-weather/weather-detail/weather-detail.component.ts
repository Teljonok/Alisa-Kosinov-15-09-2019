import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {dayWeather} from '../../models/location';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDetailComponent implements OnInit {
  @Input() item: dayWeather;
  @Input() degreeType;

  celsius:boolean;
  constructor() { }

  ngOnInit() {
       this.celsius = !!"celsius";
  }

}
