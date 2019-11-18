import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from '../shared/services/weather.service';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from '../shared/ngrx/location-reducer';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [CurrentWeatherComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    HttpClientModule,
    BrowserAnimationsModule 
  ],
  providers: [
    WeatherService
  ],
  exports: [
    CurrentWeatherComponent
  ]
})
export class CurrentWeatherModule { }
