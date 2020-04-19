import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {WeatherModel} from '../model/weather.model';
import {ForecastModel} from '../model/forecast.model';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getWeather(location: string) {
    return this.httpClient.get<WeatherModel>(`${environment.apiUrl}/weather?q=${location}&appid=${environment.apiKey}&units=metric`);
  }

  getForecast(location: string) {
    return this.httpClient.get<ForecastModel>(`${environment.apiForecast}${location}&appid=${environment.apiKey}&units=metric`);
  }
}
