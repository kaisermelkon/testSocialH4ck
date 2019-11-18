import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alert/alert.component';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from '../shared/ngrx/location-reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    BrowserAnimationsModule
  ],
})
export class AlertModule { }
