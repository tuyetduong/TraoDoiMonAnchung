import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardNewsfeedComponent } from './dashboard-newsfeed/dashboard-newsfeed.component';

const routes: Routes = [
  { path: '', component: DashboardNewsfeedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsfeedRoutingModule { }
