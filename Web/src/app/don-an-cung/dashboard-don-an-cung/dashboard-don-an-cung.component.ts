import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../@web-core/http';

@Component({
  selector: 'app-dashboard-don-an-cung',
  templateUrl: './dashboard-don-an-cung.component.html',
  styleUrls: ['./dashboard-don-an-cung.component.scss']
})
export class DashboardDonAnCungComponent implements OnInit {

  public pageDonAnCung = {
    search: '',
    amount: 10,
    page: 1,
    totalAmount: 0,
    totalPage: 1,
    sort: '',
    typeSort: ''
  };
  constructor(
    private _paginationService: PaginationService
  ) { }

  ngOnInit() {
    this._paginationService.setPagination(this.pageDonAnCung);
  }

}
