import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: object[] = [];

  @Input() data: object;

  constructor() {}

  ngOnChanges(changes: any) {
    this.users.push(changes.data);
    console.log(this.users);
  }

  ngOnInit(): void {}
}
