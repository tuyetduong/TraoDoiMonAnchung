import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { WebShareModule } from './@web-share/webshare.module';
import { CoreModule } from './@web-core';
import { AuthGuard } from './@web-core/auth-guard.service';
import { StorageService } from './@web-core/storage.service';
import { PaginationService, AuthService, UserService, API_URL } from './@web-core/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IntercepterService } from './@web-core/http-interceptor';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SuatAnService } from './@web-core/http/suat-an';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    WebShareModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    NgbModule.forRoot(),
    CoreModule.forRoot()
  ],
  // providers: [
  //   { provide: API_URL, useValue: environment.baseUrl },
  //   { provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true },
  //   AuthGuard,
  //   StorageService,
  //   PaginationService,
  //   AuthService,
  //   UserService,
  //   SuatAnService,
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
