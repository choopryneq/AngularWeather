import {Component, OnInit} from '@angular/core';
import {WeatherModel} from './model/weather.model';
import {DataService} from './service/data.service';
import {ForecastModel} from './model/forecast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather: WeatherModel;
  forecast: ForecastModel;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getWeather('Słupsk');
    this.getForecast('Słupsk');
  }

  getWeather(location) {
    this.dataService.getWeather(location).subscribe(data => {
      this.weather = data;
    });
  }

  getForecast(location) {
    this.dataService.getForecast(location).subscribe(data => {
      this.forecast = data;
      console.log(data);
    });
  }
}
