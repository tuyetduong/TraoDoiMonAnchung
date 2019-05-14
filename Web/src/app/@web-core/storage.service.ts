
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './http';

@Injectable()
export class StorageService {
    private userSub: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor() { }

    public clear() {
        this.userSub.next(null);
    }

    public get user(): Observable<User> {
        return this.userSub.asObservable();
    }

    public setUser(value: User) {
        this.userSub.next(value);
    }

    public hasUser(): boolean {
        return !!this.userSub.getValue();
    }
}
