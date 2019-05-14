import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing';
import { MatToolbarModule, MatButtonModule, MatTabsModule, MatIconModule, MatSidenavModule,
  MatChipsModule, MatInputModule, MatListModule, MatFormFieldModule, MatSliderModule, MatProgressBarModule } from '@angular/material';
// import { DashboardCrmModule } from '../dashboard-crm/dashboard-crm.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LayoutComponent } from './layout.component';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';
import { RouterModule } from '@angular/router';
import { WebShareModule } from '../@web-share/webshare.module';
import { LogoModule } from '../logo/logo.module';
import { AgmGooglemapModule } from '../agm-googlemap/agm-googlemap.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    // DashboardCrmModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    PerfectScrollbarModule,
    WebShareModule,
    LayoutRoutingModule,
    LogoModule
  ],
  declarations: [
    LayoutComponent
  ],
  providers: [
      {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
  ]
})
export class LayoutModule { }
