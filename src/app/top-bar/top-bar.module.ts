import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from '../shared/ngrx/location-reducer';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports : [
    TopBarComponent
  ]
})
export class TopBarModule { }
