import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmGooglemapComponent } from './agm-googlemap.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXTJwhYqJ6Pc7VXGRMTv40N1WRLqzuSNs'
    }),
  ],
  declarations: [AgmGooglemapComponent],
  exports: [AgmGooglemapComponent]
})
export class AgmGooglemapModule { }
