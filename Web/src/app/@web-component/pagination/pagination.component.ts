import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { COUNTPERPAGE, PaginationService } from '../../@web-core/http';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() ObjectPage: any;
  @Output() itemPerPage: EventEmitter<any> = new EventEmitter();
  @Output() clickPage: EventEmitter<any> = new EventEmitter();

  public element = COUNTPERPAGE;
  public arrPage = [1];
  public centerPage = 5;
  public pageObject: any;
  constructor(
    private _paginationService: PaginationService
  ) { }

  ngOnInit() {
    this._paginationService.getPagination.subscribe((res: any) => {
      this.pageObject = res;
      this.setCountPageUI();
    });
  }

  public selectItemPerPage() {
    this.itemPerPage.emit(this.pageObject.amount);
  }

  public setCountPageUI() {
    this.arrPage = [];
    if (this.pageObject.totalPage < 5) {
      for (let i = 1; i <= this.pageObject.totalPage; i++) {
        this.arrPage.push(i);
      }
    } else {
      if (this.pageObject.page < 3) {
        for (let i = 1; i <= 5; i++) {
          this.arrPage.push(i);
        }
      } else if ((this.pageObject.page > 3 || this.pageObject.page === 3) &&
        (this.pageObject.page < this.pageObject.totalPage - 2 || this.pageObject.page === this.pageObject.totalPage - 2)) {
        this.arrPage = [
          this.pageObject.page - 2,
          this.pageObject.page - 1,
          this.pageObject.page,
          this.pageObject.page + 1,
          this.pageObject.page + 2];
      } else {
        for (let i = this.pageObject.totalPage - 4; i <= this.pageObject.totalPage; i++) {
          this.arrPage.push(i);
        }
      }
    }
  }

  public selectPage(item) {
    this.pageObject.page = item;
    this.clickPage.emit(this.pageObject.page);
  }

  public nextOrPrevious(check) {
    this.pageObject.page = (check === 'right' && this.pageObject.page < this.pageObject.totalPage) ?
      this.pageObject.page + 1 : (check === 'left' && this.pageObject.page > 1) ?
        this.pageObject.page - 1 : this.pageObject.page;
    this.clickPage.emit(this.pageObject.page);
  }
}
