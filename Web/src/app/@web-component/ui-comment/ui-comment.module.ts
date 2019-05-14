import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCommentComponent } from './ui-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UiCommentComponent],
  exports: [UiCommentComponent]
})
export class UiCommentModule { }
