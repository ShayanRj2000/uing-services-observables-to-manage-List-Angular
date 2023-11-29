import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private userService: UserService) {}

  edit: boolean = false;
  editId: any;
  firstName: string;
  lastName: string;
  user: User;

  addUser() {
    this.user = new User(0, this.firstName, this.lastName);

    if (!this.edit) {
      const id = uuidv4();
      this.user.id = id;
    } else {
      this.user.id = this.editId;
      this.edit = false;
    }

    this.userService.sendUserAdd(this.user);

    this.firstName = '';
    this.lastName = '';
  }

  receiveDataFromChild(data: any) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.editId = data.id;
    this.edit = true;
  }

  ngOnInit(): void {}
}
