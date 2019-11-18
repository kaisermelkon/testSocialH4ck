import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { WeatherService } from '../shared/services/weather.service';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from '../shared/ngrx/location-reducer';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    WeatherService
  ],
  exports : [
    ForecastComponent
  ]
})
export class ForecastModule { }
