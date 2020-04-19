import {Component, OnInit} from '@angular/core';
import {CityModel} from './model/city.model';
import {DataService} from './service/data.service';
import {LocationService} from './service/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather: CityModel;

  constructor(private dataService: DataService, private locationService: LocationService) {}

  ngOnInit() {
    return this.dataService.getWeather('Słupsk').subscribe(data => {
      this.weather = data;
    });
  }

  getWeather(location) {
    this.dataService.getWeather(location).subscribe(data => {
      this.weather = data;
    });
  }

  getWeatherLoc() {
    return this.locationService.getPosition().then(res => {
      console.log(`Positon: ${res.lng} ${res.lat}`);
      this.dataService.getWeatherLoc(res.lng, res.lat).subscribe(data => {
        this.weather = data;
      });
    });
  }
}
