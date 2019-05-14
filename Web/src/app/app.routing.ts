import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './@web-core/auth-guard.service';



const routes: Routes = [
    {path: 'layout', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
   {path: '**', redirectTo: 'layout/newsfeed'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
