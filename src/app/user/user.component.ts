//lists all users in a chat/room
import { Component, OnInit } from '@angular/core';
import {User} from '../data/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  //when a user is selected
  selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
