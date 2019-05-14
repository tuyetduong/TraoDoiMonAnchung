import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

// import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';

const routes: Routes =  [{
  path: '', component: LayoutComponent, children: [
      { path: 'newsfeed', loadChildren: '../newsfeed/newsfeed.module#NewsfeedModule' },
      { path: 'donmoian', loadChildren: '../don-moi-an/don-moi-an.module#DonMoiAnModule' },
      { path: 'donancung', loadChildren: '../don-an-cung/don-an-cung.module#DonAnCungModule' },
      { path: 'profile', loadChildren: '../profile-user/profile-user.module#ProfileUserModule' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule { }
