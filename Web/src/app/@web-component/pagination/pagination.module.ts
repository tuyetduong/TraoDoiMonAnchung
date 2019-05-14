import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { FormsModule } from '@angular/forms';
import { PaginationService } from '../../@web-core/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PaginationComponent],
  providers: [PaginationService]
})
export class PaginationModule { }
