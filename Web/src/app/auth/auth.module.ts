import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent} from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth.routing';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule } from '@angular/material';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AuthRoutingModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    LogoModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignInComponent,
    AuthComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
