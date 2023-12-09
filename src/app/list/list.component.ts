import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: User[] = [];
  receivedUser: User;
  private dataSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.dataSubscription = this.userService.getUserAdd().subscribe((data) => {
      this.receivedUser = data;

      const index = this.users.findIndex(
        (user) => user.id === this.receivedUser.id
      );

      if (index !== -1) {
        // Update the existing object
        this.users[index] = this.receivedUser;
      } else {
        // Push a new object
        this.users.push(this.receivedUser);
      }
    });

    console.log(this.receivedUser);
  }

  editUser(user: User) {
    this.userService.sendUserEdit(user);
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
