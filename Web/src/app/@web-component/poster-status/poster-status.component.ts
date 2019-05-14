import { Component, OnInit } from '@angular/core';
import { SuatAnService } from '../../@web-core/http/suat-an';
import * as moment from 'moment';

@Component({
  selector: 'app-poster-status',
  templateUrl: './poster-status.component.html',
  styleUrls: ['./poster-status.component.scss']
})
export class PosterStatusComponent implements OnInit {

  public Object = [];
  constructor(
    private _suatAnService: SuatAnService
  ) { }

  ngOnInit() {
    this.getAllSuatAn();
  }

  public getAllSuatAn() {
    this._suatAnService.getAllSuatAn().subscribe((res: any) => {
      this.Object = res.data;
      this.Object.forEach(element => {
        element['ThoiGianTaoDon'] = moment(element['ThoiGianTaoDon']).format('DD/MM/YYYY');
      });
    });
  }

  public chiTietSuatAn(event) {
    console.log(event._id);
    
  }
}
