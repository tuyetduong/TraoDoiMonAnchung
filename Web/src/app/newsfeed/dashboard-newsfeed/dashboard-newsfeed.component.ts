import { Component, OnInit, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SuatAnService } from '../../@web-core/http/suat-an';

@Component({
  selector: 'app-dashboard-newsfeed',
  templateUrl: './dashboard-newsfeed.component.html',
  styleUrls: ['./dashboard-newsfeed.component.scss']
})
export class DashboardNewsfeedComponent implements OnInit {

  public objectSuatAn: any;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private _suatAnService: SuatAnService,
    private ngZone: NgZone,
    // private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.getAllSuatAn();
  }

  public taoDonMoiAn() {
    this.router.navigateByUrl('/layout/donmoian/create');
  }

  public getAllSuatAn() {
    this._suatAnService.getAllSuatAn().subscribe((res: any) => {
      this.objectSuatAn = res.data;
      console.log(this.objectSuatAn, 'this.objectSuatAn');
      
      this._suatAnService.setObjSuatAn(res.data);
    });
  }
}
