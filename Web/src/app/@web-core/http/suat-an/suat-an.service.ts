import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { map, catchError } from 'rxjs/operators';
import { APICONFIG, SUCCESS, STATUS } from '..';
import { BehaviorSubject } from 'rxjs';

// import * as Tinh_TP from '../../../../assets/address/tinh_tp.json';
// import * as Quan_Huyen from '../../../../assets/address/quan_huyen.json';
// import * as Xa_Phuong from '../../../assets/address/xa_phuong.json';

@Injectable()
export class SuatAnService {
    private objSuatAn: BehaviorSubject<any> = new BehaviorSubject(new Array());
    constructor(
        private http: HttpClient,
        private _toastr: ToastrService,
    ) { }

    public taoSuatAn(req) {
        // this.spinnerService.show();
        return this.http.post(`${APICONFIG.SUAT_AN.CREATE}`, req).pipe(
            map((result) => {
                // this.spinnerService.hide();
                // this._toastr.success(SUCCESS.AUTH.DANGKY);
                return result;
            }),
            catchError((errorRes: any) => {
                // this.spinnerService.hide();
                throw errorRes.error;
            }));
    }

    public getSuatAn(req) {
        // this.spinnerService.show();
        return this.http.post(`${APICONFIG.SUAT_AN.GET}`, req).pipe(
            map((result) => {
                // this.spinnerService.hide();
                return result;
            }),
            catchError((errorRes: any) => {
                // this.spinnerService.hide();
                throw errorRes.error;
            }));
    }

    public getAllSuatAn() {
        // this.spinnerService.show();
        return this.http.get(`${APICONFIG.SUAT_AN.GETALL}`).pipe(
            map((result) => {
                // this.spinnerService.hide();
                return result;
            }),
            catchError((errorRes: any) => {
                // this.spinnerService.hide();
                throw errorRes.error;
            }));
    }

    public findSuatAnById(id: string) {
        // this.spinnerService.show();
        return this.http.get(`${APICONFIG.SUAT_AN.GETONE(id)}`).pipe(
            map((result) => {
                // this.spinnerService.hide();
                return result;
            }),
            catchError((errorRes: any) => {
                // this.spinnerService.hide();
                throw errorRes.error;
            }));
    }

    public getTinh_TP() {
        // return Tinh_TP;
        return this.http.get('http://localhost:4200/assets/address/tinh_tp.json');
    }

    public getQuan_Huyen() {
        // return Quan_Huyen;
        return this.http.get('http://localhost:4200/assets/address/quan_huyen.json');
    }

    public getXa_Phuong() {
        // return Xa_Phuong;
        return this.http.get('http://localhost:4200/assets/address/xa_phuong.json');
    }

    public getLatLngFromAddress(address: string) {
        const req = {
            address: address
        };
        return this.http.post<any>(`${APICONFIG.SUAT_AN.GETLATLNGFROMADDRESS}`, req).pipe(
            map((result) => {
                return result;
            }),
            catchError((errorRes: any) => {
                this._toastr.error(errorRes.error.message, STATUS.FAIL);
                throw errorRes.error;
            }));
    }

    public requestbinhLuan(body: string, id: string) {
        const req = {
            BinhLuan: body,
            idSuatAn: id
        };
        return this.http.post<any>(`${APICONFIG.SUAT_AN.REQUEST_BINH_LUAN}`, req).pipe(
            map((result) => {
                return result;
            }),
            catchError((errorRes: any) => {
                this._toastr.error(errorRes.error.message, STATUS.FAIL);
                throw errorRes.error;
            }));
    }

    public requestAnCung(idSuatAn: string) {
        return this.http.get<any>(`${APICONFIG.SUAT_AN.REQUEST_AN_CUNG(idSuatAn)}`).pipe(
            map((result) => {
                return result;
            }),
            catchError((errorRes: any) => {
                this._toastr.error(errorRes.error.message, STATUS.FAIL);
                throw errorRes.error;
            }));
    }

    public duyetAnCung(data: any) {
        return this.http.post<any>(`${APICONFIG.SUAT_AN.DUYET_AN_CUNG}`, data).pipe(
            map((result) => {
                return result;
            }),
            catchError((errorRes: any) => {
                this._toastr.error(errorRes.error.message, STATUS.FAIL);
                throw errorRes.error;
            }));
    }

    get getObjSuatAn() {
        return this.objSuatAn.asObservable();
    }

    public setObjSuatAn(data) {
        this.objSuatAn.next(data);
    }
}