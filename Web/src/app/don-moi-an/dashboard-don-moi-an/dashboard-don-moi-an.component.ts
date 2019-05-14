import { Component, OnInit } from '@angular/core';
import { SuatAnService } from '../../@web-core/http/suat-an';
import { PaginationService } from '../../@web-core/http';

@Component({
  selector: 'app-dashboard-don-moi-an',
  templateUrl: './dashboard-don-moi-an.component.html',
  styleUrls: ['./dashboard-don-moi-an.component.scss']
})
export class DashboardDonMoiAnComponent implements OnInit {

  public arrDonMoiAn = [];

  pageSuatAn = {
    search: '',
    amount: 10,
    page: 1,
    totalAmount: 0,
    totalPage: 1,
    sort: '',
    typeSort: ''
  };
  public idDuyetAnCung = '';
  public idSuatAn = '';
  constructor(
    private _suatAnService: SuatAnService,
    private _paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.getSuatAn();
    this._paginationService.setPagination(this.pageSuatAn);
  }

  public getSuatAn() {
    this._suatAnService.getSuatAn(this.pageSuatAn).subscribe((res: any) => {
      console.log(res, 'res');
      this.arrDonMoiAn = res.data;
      console.log(this.arrDonMoiAn);
      this.arrDonMoiAn.forEach(e => {
        e['show'] = false;
      });
    });
  }

  public getdummycheckin(index) {
    console.log('true');
    
    this.arrDonMoiAn[index].show = true;
  }
  public hidden(index) {
    this.arrDonMoiAn[index].show = false;
  }

  public getIdNguoiAnCung(row, data) {
    this.idSuatAn = data;
    this.idDuyetAnCung = row.NguoiAnCung._id
  }

  public dongYAnCung() {
    const payload = {
      idSuatAn: this.idSuatAn,
      Status: 'agree',
      idNguoiAnChung: this.idDuyetAnCung
    }
    this._suatAnService.duyetAnCung(payload).subscribe((res: any) => {
      this.getSuatAn();
    })
  }

  public tuChoiAnCung() {
    const payload = {
      idSuatAn: this.idSuatAn,
      Status: 'refuse',
      idNguoiAnChung: this.idDuyetAnCung
    }
    this._suatAnService.duyetAnCung(payload).subscribe((res: any) => {
      this.getSuatAn();
    })
  }
}
