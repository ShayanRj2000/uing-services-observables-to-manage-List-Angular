import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { User, UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  edit: boolean = false;
  editId: any;
  user: User;
  private dataSubscription: Subscription;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.form = fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  addUser() {
    if (this.form.invalid) {
      return;
    }

    let rawVal = this.form.getRawValue();
    this.user = new User(0, rawVal.firstName, rawVal.lastName);

    if (!this.edit) {
      this.user.id = uuidv4();
    } else {
      this.user.id = this.editId;
      this.edit = false;
    }

    this.userService.sendUserAdd(this.user);
    this.form.reset();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
