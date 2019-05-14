import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { SUCCESS, APICONFIG } from '..';

@Injectable()
export class DonMoiAnService {

    constructor(
        private http: HttpClient,
        private _toastr: ToastrService,
        // private _storage: StorageService,
    ) { }

    public createDonMoiAn(req) {
        // this.spinnerService.show();
        return this.http.post(`${APICONFIG.AUTH.DANGKY}`, req).pipe(
            map((result) => {
                // this.spinnerService.hide();
                this._toastr.success(SUCCESS.AUTH.DANGKY);
                return result;
            }),
            catchError((errorRes: any) => {
                // this.spinnerService.hide();
                throw errorRes.error;
            }));
    }
}