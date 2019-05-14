import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDonAnCungComponent } from './dashboard-don-an-cung/dashboard-don-an-cung.component';
import { DonAnCungComponent } from './don-an-cung.component';
import { DonAnCungRoutingModule } from './don-an-cung.routing';
import { PaginationModule } from '../@web-component/pagination/pagination.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DonAnCungRoutingModule,
    PaginationModule
  ],
  declarations: [
    DonAnCungComponent,
    DashboardDonAnCungComponent
  ]
})
export class DonAnCungModule { }
