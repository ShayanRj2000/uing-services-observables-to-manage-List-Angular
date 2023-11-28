import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  edit: boolean = false;
  editId: any;

  firstName: string;
  lastName: string;

  user: { id: any; firstName: string; lastName: string };

  addUser() {
    this.user = {
      id: 0,
      firstName: this.firstName,
      lastName: this.lastName,
    };

    if (!this.edit) {
      const id = uuidv4();
      this.user.id = id;
    } else {
      this.user.id = this.editId;
      this.edit = false;
    }

    this.firstName = '';
    this.lastName = '';
  }

  receiveDataFromChild(data: any) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.editId = data.id;
    this.edit = true;
  }

  constructor() {}

  ngOnInit(): void {}
}