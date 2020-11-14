import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../service/weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {
  public actualWeatherData = null;
  constructor(
    private weatherService: WeatherService
  ) { }
  ngOnInit(): void {
    this.actualWeatherData = this.weatherService.actualWeatherData;
  }
}
