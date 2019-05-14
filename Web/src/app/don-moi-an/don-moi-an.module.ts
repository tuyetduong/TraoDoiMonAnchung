import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDonMoiAnComponent } from './dashboard-don-moi-an/dashboard-don-moi-an.component';
import { DonMoiAnComponent } from './don-moi-an.component';
import { DonMoiAnRoutingModule } from './don-moi-an.routing';
import { TaoDonMoiAnComponent } from './tao-don-moi-an/tao-don-moi-an.component';
import { ChinhSuaDonMoiAnComponent } from './chinh-sua-don-moi-an/chinh-sua-don-moi-an.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmGooglemapModule } from '../agm-googlemap/agm-googlemap.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgSelectModule } from '@ng-select/ng-select';
import { PaginationModule } from '../@web-component/pagination/pagination.module';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { ChiTietDonAnCungComponent } from './chi-tiet-don-an-cung/chi-tiet-don-an-cung.component';

@NgModule({
  imports: [
    CommonModule,
    DonMoiAnRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    // AgmGooglemapModule
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXTJwhYqJ6Pc7VXGRMTv40N1WRLqzuSNs'
    }),
    CKEditorModule,
    ReactiveFormsModule,
    NgSelectModule,
    PaginationModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  declarations: [
    DonMoiAnComponent,
    DashboardDonMoiAnComponent,
    TaoDonMoiAnComponent,
    ChinhSuaDonMoiAnComponent,
    ChiTietDonAnCungComponent
  ]
})
export class DonMoiAnModule { }
