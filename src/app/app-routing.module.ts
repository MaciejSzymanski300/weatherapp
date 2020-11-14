import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './component/start/start.component';
import {SelectCityComponent} from './component/select-city/select-city.component';
import {ShowWeatherComponent} from './component/show-weather/show-weather.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'select-city',
    component: SelectCityComponent
  },
  {
    path: 'show-weather',
    component: ShowWeatherComponent
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
