import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  firstName: string;
  lastName: string;
  id: any = uuidv4();
  user: {
    id: any;
    firstName: string;
    lastName: string;
  };

  addUser() {
    this.user = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
    };
    this.firstName = '';
    this.lastName = '';
  }

  receiveDataFromChild(data: any) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.user.id = data.id;
    // console.log('Received data in parent component:', data);
  }

  constructor() {}

  ngOnInit(): void {}
}
