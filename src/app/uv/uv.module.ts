import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UvComponent } from './uv.component';
import { WeatherService } from '../shared/services/weather.service';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from '../shared/ngrx/location-reducer';
import {
  MatCardModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [UvComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    MatCardModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    WeatherService
  ],
  exports: [
    UvComponent
  ]
})
export class UvModule { }
