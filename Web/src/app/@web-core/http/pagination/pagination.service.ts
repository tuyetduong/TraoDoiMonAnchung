import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PaginationService {


  private _pagination: BehaviorSubject<any> = new BehaviorSubject(new Array());
  constructor() { }

  get getPagination() {
   return this._pagination.asObservable();
  }

  public setPagination(data) {
    this._pagination.next(data);
  }
}
