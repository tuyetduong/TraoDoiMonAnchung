import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { APICONFIG, SUCCESS } from '../@http-config';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { StorageService } from '../../storage.service';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private _toastr: ToastrService,
    private router: Router,
    // private _storage: StorageService,
    // private spinnerService: Ng4LoadingSpinnerService
  ) { }

  public login(req) {
    // this.spinnerService.show();
    return this.http.post(`${APICONFIG.AUTH.LOGIN}`, req).pipe(
      map((result) => {
        // this.spinnerService.hide();
        this._toastr.success(SUCCESS.AUTH.LOGIN);
        this.setLocalStore(result);
        return result;
      }),
      catchError((errorRes: any) => {
        // this.spinnerService.hide();
        throw errorRes.error; }));
  }

  public dangKy(req) {
    // this.spinnerService.show();
    return this.http.post(`${APICONFIG.AUTH.DANGKY}`, req).pipe(
      map((result) => {
        // this.spinnerService.hide();
        this._toastr.success(SUCCESS.AUTH.DANGKY);
        this.setLocalStore(result);
        return result;
      }),
      catchError((errorRes: any) => {
        // this.spinnerService.hide();
        throw errorRes.error; }));
  }

  logout() {
    localStorage.clear();
    // this._storage.clear();
    this.router.navigateByUrl('/auth/signin');
  }

  checkLogin() {
    const token = localStorage.getItem('x-access-token');
    if (!token) {
      return false;
    } else {
      return true;
    }
  }

  private setLocalStore(data) {
    localStorage.setItem('x-access-token', data.token);
  }

  public checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  public checkUsername(username) {
    const re = /^[a-zA-Z0-9]{1,}$/;
    return re.test(username);
  }
}
