import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  firstName: string;
  lastName: string;

  addUser() {
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    this.firstName = '';
    this.lastName = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
