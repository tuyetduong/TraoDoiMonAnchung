import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APICONFIG } from '../@http-config';
import { StorageService } from '../../storage.service';
import { User } from '.';

@Injectable()
export class UserService {

  private data = {
    id: '123124',
    TenDangNhap: 'duong',
    Password: 'duong',
    Email: 'duong@gmail.com',
    IDThucDon: '1241',
    SDT: '15124124',
    gender: 'Nu',
    avatar: '',
    role: 'User',
    salt: '2315612412',
    activated: true
  };
  constructor(
    private http: HttpClient,
    private _toastr: ToastrService,
    private _storage: StorageService,
  ) { }

    // LAY THONG TIN THEO TOKEN
  public GetInformationByToken(): Observable<User> {
    if (this._storage.hasUser()) {
      return this._storage.user;
    }
    return this.http.get<User>(`${APICONFIG.USER.GETINFOBYTOKEN}`).pipe(
      map((result) => {
        if (!result) { return; }
        this._storage.setUser(result);
        return result;
      }));
  }
}
