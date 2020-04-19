import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {CityModel} from '../model/city.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getWeather(location: string) {
    return this.httpClient.get<CityModel>(`${environment.apiUrl}/weather?q=${location}&appid=${environment.apiKey}&units=metric`);
  }

  getWeatherLoc(lat: number, lon: number) {
    return this.httpClient.get<CityModel>(`${environment.apiLat}${lat}&lon=${lon}&appid=${environment.apiKey}&units=metric`);
  }
}
