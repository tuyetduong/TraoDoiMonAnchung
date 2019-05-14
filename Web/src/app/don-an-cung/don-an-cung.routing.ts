import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDonAnCungComponent } from './dashboard-don-an-cung/dashboard-don-an-cung.component';

const routes: Routes = [
  { path: '', component: DashboardDonAnCungComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonAnCungRoutingModule { }
