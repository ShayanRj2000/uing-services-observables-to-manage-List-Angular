import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userAdd = new Subject<any>();
  private userEdit = new Subject<any>();

  sendUserAdd(data: User) {
    this.userAdd.next(data);
  }

  getUserAdd() {
    return this.userAdd.asObservable();
  }

  sendUserEdit(data: User) {
    this.userEdit.next(data);
  }

  getData() {
    return this.userEdit.asObservable();
  }

  constructor() {}
}

export class User {
  constructor(id: any, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  id: any;
  firstName: string;
  lastName: string;
}
