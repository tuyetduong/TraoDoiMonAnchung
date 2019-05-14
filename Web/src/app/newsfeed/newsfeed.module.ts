import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { DashboardNewsfeedComponent } from './dashboard-newsfeed/dashboard-newsfeed.component';
import { FormsModule } from '@angular/forms';
import { NewsfeedRoutingModule } from './newsfeed.routing';
import { AgmGooglemapModule } from '../agm-googlemap/agm-googlemap.module';
import { PosterStatusModule } from '../@web-component/poster-status/poster-status.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewsfeedRoutingModule,
    AgmGooglemapModule,
    PosterStatusModule
  ],
  declarations: [
    NewsfeedComponent,
    DashboardNewsfeedComponent
  ]
})
export class NewsfeedModule { }
