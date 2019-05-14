import { Component, OnInit, Input } from '@angular/core';
import { SuatAnService } from '../../@web-core/http/suat-an';
import { ToastrService } from 'ngx-toastr';
import { SUCCESS, STATUS } from '../../@web-core/http';
import * as moment from 'moment';

@Component({
  selector: 'app-ui-comment',
  templateUrl: './ui-comment.component.html',
  styleUrls: ['./ui-comment.component.scss']
})
export class UiCommentComponent implements OnInit {

  @Input() idSuatAn: string;
  public binhLuan: any;
  public ObjectBinhLuan: any;
  constructor(
    private _suatAnService: SuatAnService,
    private _toastr: ToastrService,
  ) { }

  ngOnInit() {
    // console.log(this.idSuatAn, 'idSuatAn');
    this.getOneSuatAnById();
  }

  public getOneSuatAnById() {
    this._suatAnService.findSuatAnById(this.idSuatAn).subscribe((res: any) => {
      this.ObjectBinhLuan = res.arrBinhLuan;
      this.ObjectBinhLuan.forEach(element => {
        element['ThoiGian'] = moment(element['ThoiGian']).format('DD/MM/YYYY');
      });
    });
  }

  public requestBinhLuan() {
    this._suatAnService.requestbinhLuan(this.binhLuan, this.idSuatAn).subscribe((res: any) => {
      this.ObjectBinhLuan = res.arrBinhLuan;
      this.binhLuan = null;
    });
  }

  public setIdRequestAnCung() {
    
  }

  public requestAnCung() {
    this._suatAnService.requestAnCung(this.idSuatAn).subscribe((res: any) => {
      this._toastr.success(SUCCESS.SUAT_AN.REQUEST, STATUS.SUCCESS);
    });
  }

}
