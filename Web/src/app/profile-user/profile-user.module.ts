import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUserComponent } from './profile-user.component';
import { ProfileUserRoutingModule } from './profile-user.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileUserRoutingModule
  ],
  declarations: [ProfileUserComponent]
})
export class ProfileUserModule { }
