import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from '../shared/ngrx/location-reducer';
import { MatTabsModule } from '@angular/material';
import { TopBarModule } from '../top-bar/top-bar.module';
import { CurrentWeatherModule } from '../current-weather/current-weather.module';
import { UvModule } from '../uv/uv.module';
import { ForecastModule } from '../forecast/forecast.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    MatTabsModule,
    TopBarModule,
    CurrentWeatherModule,
    UvModule,
    ForecastModule,
    BrowserAnimationsModule 
  ],
})
export class HomePageModule { }
