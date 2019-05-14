import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginationService, AuthService, API_URL } from './http';
import { environment } from '../../environments/environment';
import { IntercepterService } from './http-interceptor';
import { StorageService } from './storage.service';
import { UserService } from './http/user';
import { AuthGuard } from './auth-guard.service';
import { SuatAnService } from './http/suat-an';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    NgbModule
  ],
  declarations: []
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: API_URL, useValue: environment.baseUrl },
        { provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true },
        AuthGuard,
        StorageService,
        PaginationService,
        AuthService,
        UserService,
        SuatAnService,
      ]
    };
  }
}
