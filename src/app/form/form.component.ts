import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  firstName: string;
  lastName: string;

  addUser() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
    };
    this.firstName = '';
    this.lastName = '';

    // console.log(user);
  }

  constructor() {}

  ngOnInit(): void {}
}
