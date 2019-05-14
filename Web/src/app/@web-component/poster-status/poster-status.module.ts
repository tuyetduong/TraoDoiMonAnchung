import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterStatusComponent } from './poster-status.component';
import { UiCommentModule } from '../ui-comment/ui-comment.module';

@NgModule({
  imports: [
    CommonModule,
    UiCommentModule,

  ],
  declarations: [PosterStatusComponent],
  exports: [PosterStatusComponent]
})
export class PosterStatusModule { }
