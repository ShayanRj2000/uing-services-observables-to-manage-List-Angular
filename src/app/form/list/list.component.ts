import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: { firstName: string; lastName: string; id: any }[] = [];

  @Input() inData: object;
  @Output() outData = new EventEmitter<object>();

  constructor() {}

  // ngOnChanges(changes: any) {
  //   if (!changes.inData.firstChange) {
  //     this.users.push(changes.inData.currentValue);
  //   }
  // }

  ngOnChanges(changes: any) {
    if (!changes.inData.firstChange) {
      const index = this.users.findIndex(
        (user) => user.id === changes.inData.currentValue.id
      );
      if (index !== -1) {
        // Update the existing object
        this.users[index] = changes.inData.currentValue;
      } else {
        // Push a new object
        this.users.push(changes.inData.currentValue);
      }
    }
  }

  editUser(user: object) {
    this.outData.emit(user);
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  ngOnInit(): void {}
}
