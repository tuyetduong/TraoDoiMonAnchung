import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { AgmCoreModule, CircleManager, MouseEvent, MapsAPILoader } from '@agm/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, DROPDOWNNOTFOUND, SUCCESS } from '../../@web-core/http';
import { SuatAnService } from '../../@web-core/http/suat-an';
import { HttpClient } from '@angular/common/http';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../@web-core';
import * as moment from 'moment';

@Component({
  selector: 'app-tao-don-moi-an',
  templateUrl: './tao-don-moi-an.component.html',
  styleUrls: ['./tao-don-moi-an.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class TaoDonMoiAnComponent implements OnInit {
  // NUT INPUT SEARCH
  @ViewChild('search')
  public searchElementRef: ElementRef;

  // TOA DO GOOGLE MAP
  public latitude = 15.9668732;
  public longitude = 107.1941452;
  public zoom = 5.2;

  // DIA CHI ADDRESS
  public formDonMoiAn: FormGroup;

  // LOADING CHO DROPDOWN
  public loadingTrademark = false;
  public loadingDepartment = false;
  public loadingEmployee = false;

  public notFoundText = DROPDOWNNOTFOUND;

  public dropTinh_TP: any;
  public dropQuan_Huyen: any;
  public dropXa_Phuong: any;

  public JSONTinh_TP: any;
  public JSONQuan_Huyen: any;
  public JSONXa_Phuong: any;

  private checkTinh_TP: any;
  private checkQuan_Huyen: any;
  private checkXa_Phuong: number;

  public address = '';

  public isCheckCode = true;

  public isCheck = true;

  public dropGioiHanAnChung = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public checkDayThoiGianChotDon = false;
  constructor(
    private router: Router,
    private ngZone: NgZone,
    // private storeService: StoreService,
    private mapsAPILoader: MapsAPILoader,
    private fb: FormBuilder,
    private http: HttpClient,
    private _userService: UserService,
    private _suatAnService: SuatAnService,
    private _toastr: ToastrService,
  ) {
    this.latitude = 15.9668732;
    this.longitude = 107.1941452;
    this.zoom = 5.2;
  }

  ngOnInit() {
    this.FormAdd();
    this.layTatCaDuLieuHanhChinh();
  }

  // ADD FORM GROUP
  private FormAdd() {
    this.formDonMoiAn = this.fb.group({
      NguoiTao: [null],

      ArrNguoiAnChung: [[]],
      Tinh_TP: [null, Validators.required],
      Quan_Huyen: [null, Validators.required],
      Xa_Phuong: [null, Validators.required],
      Address: [null],
      DiaChiDayDu: [null],
      Location: [null],
      ThoiGianTaoDon: [null],
      ThoiGianChotDon: [null, Validators.required],
      NoiDung: [null, Validators.required],
      GioiHanAnChung: [1, Validators.required]
    });
    // this.formDonMoiAn.controls['address'].disable();
  }

  public taoSuatAn() {
    this.formDonMoiAn.patchValue({
      Location: {
        lat: this.latitude,
        lng: this.longitude
      }
    });
    this._suatAnService.taoSuatAn(this.formDonMoiAn.getRawValue()).subscribe((res: any) => {
      this._toastr.success(SUCCESS.SUAT_AN.CREATE);
      this.router.navigateByUrl('/layout/newsfeed');
    });
  }

  private layTatCaDuLieuHanhChinh() {
    this._suatAnService.getTinh_TP().subscribe((res: any) => {
      this.JSONTinh_TP = res ;
      this.JSONTinh_TP = this.convertJsonToArray(this.JSONTinh_TP);
      this._suatAnService.getQuan_Huyen().subscribe((data: any) => {
        this.JSONQuan_Huyen = data;
        this.JSONQuan_Huyen = this.convertJsonToArray(this.JSONQuan_Huyen);
        this._suatAnService.getXa_Phuong().subscribe((data1: any) => {
          this.JSONXa_Phuong = data1;
          this.JSONXa_Phuong = this.convertJsonToArray(this.JSONXa_Phuong);
          this.getTinh_TP();
        });
      });
    });
  }

  convertJsonToArray(object: Object) {
    const key = Object.keys(object);
    const temp = [];
    key.forEach(e => {
      temp.push(object[e]);
    });
    return temp;
  }

  private getTinh_TP() {
    this.dropTinh_TP = this.compactData(this.JSONTinh_TP, 'Tinh_TP');
  }

  private getQuan_Huyen() {
    const codeTinh_TP = this.findArrayByString(this.formDonMoiAn.value.Tinh_TP, this.JSONTinh_TP, 'Tinh_TP');
    if (codeTinh_TP != null) {
      const temp = this.JSONQuan_Huyen.filter(x => x.parent_code === codeTinh_TP);
      this.dropQuan_Huyen = this.compactData(temp, '');
    }
  }

  private getXa_Phuong() {
    const codeQuanHuyen = this.findArrayByString(this.formDonMoiAn.value.Quan_Huyen, this.JSONQuan_Huyen, '');
    if (codeQuanHuyen != null) {
      const temp = this.JSONXa_Phuong.filter(x => x.parent_code === codeQuanHuyen);
      this.dropXa_Phuong = this.compactData(temp, '');
    }
  }

  private compactData(dataJson, type) {
    const temp: any = [];
    if (type === 'Tinh_TP') {
      dataJson.forEach(element => {
        temp.push(element.name);
      });
    } else {
      dataJson.forEach(element => {
        temp.push(element.name_with_type);
      });
    }
    return temp;
  }

  private findArrayByString(data, Arr, type) {
    let temp: any;
    if (type === 'Tinh_TP') {
      temp = Arr.filter(x => x.name === data);
    } else {
      temp = Arr.filter(x => x.name_with_type === data);
    }
    if (temp[0]) {
      return temp[0].code;
    } else {
      return null;
    }
  }

  public ConverString() {
    
    let Tinh_TP = '';
    let Quan_Huyen = '';
    let Phuong_Xa = '';
    if (this.formDonMoiAn.getRawValue().Tinh_TP) {
      Tinh_TP = this.formDonMoiAn.getRawValue().Tinh_TP || '';
      if (this.checkTinh_TP !== this.formDonMoiAn.getRawValue().Tinh_TP) {
        this.formDonMoiAn.controls['Quan_Huyen'].setValue(null);
        this.formDonMoiAn.controls['Xa_Phuong'].setValue(null);
        this.dropQuan_Huyen = [];
        this.dropXa_Phuong = [];
        this.checkTinh_TP = this.formDonMoiAn.getRawValue().Tinh_TP;
      }
      this.getQuan_Huyen();
      this.formDonMoiAn.controls['Quan_Huyen'].enable();
      this.zoom = 11;
    } else {
      this.formDonMoiAn.controls['Tinh_TP'].setValue(null);
      this.formDonMoiAn.controls['Quan_Huyen'].setValue(null);
      this.formDonMoiAn.controls['Xa_Phuong'].setValue(null);
      this.dropQuan_Huyen = [];
      this.dropXa_Phuong = [];
      this.formDonMoiAn.controls['Quan_Huyen'].disable();
      this.formDonMoiAn.controls['Xa_Phuong'].disable();
      this.formDonMoiAn.controls['Address'].disable();
    }
    if (this.formDonMoiAn.getRawValue().Quan_Huyen) {
      Quan_Huyen = this.formDonMoiAn.getRawValue().Quan_Huyen + ', ' || '';
      if (this.checkQuan_Huyen !== this.formDonMoiAn.getRawValue().Quan_Huyen) {
        this.formDonMoiAn.controls['Xa_Phuong'].setValue(null);
        this.formDonMoiAn.controls['Address'].setValue('');
        this.checkQuan_Huyen = this.formDonMoiAn.getRawValue().Quan_Huyen;
        this.dropXa_Phuong = [];
      }
      this.getXa_Phuong();
      this.formDonMoiAn.controls['Xa_Phuong'].enable();
      this.zoom = 13;
    } else {
      this.formDonMoiAn.controls['Quan_Huyen'].setValue(null);
      this.formDonMoiAn.controls['Xa_Phuong'].setValue(null);
      this.formDonMoiAn.controls['Address'].setValue('');
      this.dropXa_Phuong = [];
      this.formDonMoiAn.controls['Xa_Phuong'].disable();
      this.formDonMoiAn.controls['Address'].disable();
    }
    if (this.formDonMoiAn.getRawValue().Xa_Phuong) {
      Phuong_Xa = this.formDonMoiAn.getRawValue().Xa_Phuong + ', ' || '';
      if (this.checkXa_Phuong !== this.formDonMoiAn.getRawValue().Xa_Phuong) {
        this.formDonMoiAn.controls['Address'].setValue('');
        this.checkXa_Phuong = this.formDonMoiAn.getRawValue().Xa_Phuong;
      }
      this.zoom = 16;
      this.formDonMoiAn.controls['Address'].enable();
    } else {
      this.formDonMoiAn.controls['Xa_Phuong'].setValue(null);
      this.formDonMoiAn.controls['Address'].setValue('');
      this.formDonMoiAn.controls['Address'].disable();
    }
    const Address = (this.formDonMoiAn.getRawValue().Address !== '') ? this.formDonMoiAn.getRawValue().Address + ', ' : '';
    const address = Address + Phuong_Xa + Quan_Huyen + Tinh_TP;
    this.formDonMoiAn.controls['DiaChiDayDu'].setValue(address);
    this.getLatLngFromAddress(address);
  }

  private getLatLngFromAddress(address: string) {
    // const temp = address.split(',').length - 1; // tinh so luong dau phay
    this._suatAnService.getLatLngFromAddress(address).subscribe((res: any) => {
      if (res) {
        this.latitude = res.lat;
        this.longitude = res.lng;
      }
      // this.zoom = (temp < 4) ? 6 + (7 * temp) / 2 : 17.5;
    });
  }

  public maskInput() {
    this.checkDayThoiGianChotDon = (moment(this.formDonMoiAn.value.ThoiGianChotDon, 'DD/MM/YYY', true)).isValid();
  }
}
