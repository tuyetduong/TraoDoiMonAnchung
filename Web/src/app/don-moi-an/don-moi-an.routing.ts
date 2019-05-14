import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDonMoiAnComponent } from './dashboard-don-moi-an/dashboard-don-moi-an.component';
import { TaoDonMoiAnComponent } from './tao-don-moi-an/tao-don-moi-an.component';

const routes: Routes = [
  { path: '', component: DashboardDonMoiAnComponent },
  { path: 'create', component: TaoDonMoiAnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonMoiAnRoutingModule { }
