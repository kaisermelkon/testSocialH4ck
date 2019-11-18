import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from './alert/alert.module';
import { CurrentWeatherModule } from './current-weather/current-weather.module';
import { HomePageModule } from './home-page/home-page.module';
import { ForecastModule } from './forecast/forecast.module';
import { TopBarModule } from './top-bar/top-bar.module';
import { UvModule } from './uv/uv.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule, 
    CurrentWeatherModule,
    HomePageModule, 
    ForecastModule,
    TopBarModule, 
    UvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
