import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import {WeatherService} from '../service/weather.service';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {
  cityForm = new FormGroup({
    cityName: new FormControl('')
  });

  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.cityForm.value.cityName);
    this.weatherService.getWeatherByCityName(this.cityForm.value.cityName).pipe(
      map((data) => {
        this.weatherService.actualWeatherData = data;
        this.router.navigate(['/', 'show-weather']);
        console.log('success');
      }),
      catchError(
        this.handleError.bind(this)
      )
    ).subscribe();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error.error.cod, error.error.message);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
