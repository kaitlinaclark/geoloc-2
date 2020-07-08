import { Component, OnInit } from '@angular/core';

import { User } from '../data/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  	selectedUser: User;
	users: User[];

	constructor(private userService: UserService) { }

  ngOnInit() {
	this.getUsers();
  }

	getUsers(): void{
		this.userService.getUsers()
			.subscribe(users => this.users = users);
	}

}
