import { Component, OnInit, Input } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  firstName: string;
  lastName: string;
  user: object;

  @Input() sendToList: object;

  addUser() {
    const id = uuidv4();
    this.user = {
      id: id,
      firstName: this.firstName,
      lastName: this.lastName,
    };
    this.firstName = '';
    this.lastName = '';

    this.sendToList = this.user;

    // console.log(user);
  }

  constructor() {}

  ngOnInit(): void {}
}
