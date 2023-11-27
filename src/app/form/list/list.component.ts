import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: { firstName: string; lastName: string; id: any }[] = [];

  @Input() data: object;

  constructor() {}

  ngOnChanges(changes: any) {
    if (!changes.data.firstChange) {
      this.users.push(changes.data.currentValue);
    }

    console.log(this.users);
  }

  ngOnInit(): void {}
}
