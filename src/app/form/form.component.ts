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
  editMode: boolean = false;
  editId: any;
  user: User;
  private dataSubscription: Subscription;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.form = fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.dataSubscription = this.userService
      .getUserEdit()
      .subscribe((user: User) => {
        this.editMode = true;
        this.editId = user.id;

        this.form.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
        });
      });
  }

  addUser() {
    if (this.form.invalid) {
      return;
    }

    let rawVal = this.form.getRawValue();
    this.user = new User(0, rawVal.firstName, rawVal.lastName);

    if (!this.editMode) {
      const id = uuidv4();
      this.user.id = id;
    } else {
      this.user.id = this.editId;
      this.editMode = false;
    }

    this.userService.sendUserAdd(this.user);
    this.form.reset();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
