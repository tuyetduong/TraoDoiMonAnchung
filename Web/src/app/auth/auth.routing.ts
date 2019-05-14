import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes =  [
  // { path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: '', component: AuthComponent, children: [
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
  ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
