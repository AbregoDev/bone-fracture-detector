import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _currentUser: any;

  set currentUser(user: any) {
    this._currentUser = user;
  }

  get currentUser() {
    return this._currentUser;
  }

  constructor() { }

  cleanCurrentUser() {
    this._currentUser = undefined;
  }
}
