import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService, User } from './http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import {UserService} from './http/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private route: Router,
    private _user: UserService,
  ) { }

  canActivate(): Observable<boolean> {
    return this._user.GetInformationByToken()
    .pipe(mergeMap((data: User) => {
      if (!data) {
        this.route.navigateByUrl('auth/signin');
        return of(false);
      }
      return of(true);
    }));
  }


}
