import { Observable, throwError } from 'rxjs';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
// import { API_URL } from './config/api';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { APICONFIG, API_URL } from './http/@http-config';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class IntercepterService implements HttpInterceptor {

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private router: Router,
    // private spinnerService: Ng4LoadingSpinnerService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      url: this.prepareUrl(req.url),
      // withCredentials: false,
      headers: req.headers.set('x-access-token', localStorage.getItem('x-access-token') || '').set('Accept', 'multipart/form-data'),
    });
    return next.handle(request)
    .pipe(
      catchError((err) => {
        // this.spinnerService.hide();
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigateByUrl('/auth/signin', { queryParams: { returnUrl: window.location.pathname } });
            localStorage.clear();
          }
          return throwError(err);
        }
    }));
  }

  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }

  private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : this.apiUrl + url;
    return url.replace(/([^:]\/)\/+/g, '$1');
  }
}

