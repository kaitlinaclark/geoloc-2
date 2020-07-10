import { Component, OnInit, AfterViewInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserService } from '../service/user.service';

import { Users } from '../data/mock-users';
import { User } from '../data/user';

import { CurrentUser, setCurrentUser } from '../data/current-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	@Output() loginCompleted = new EventEmitter<boolean>();

	@ViewChild('username', { static: false }) username;
	@ViewChild('error', { static: false }) error;
	@ViewChild('success', { static: false }) success;
	
	users: User[] = Users;

  constructor() { }

  ngOnInit() {
  }

	login(): void {
		var uname = this.username.nativeElement.value;
		console.log("login: ", CurrentUser);
		if(/\S/.test(uname)){
			var u = (Users.find(user => user.name === uname));
			let index = Users.indexOf(u);
			if(index >= 0){ // username is registered
				if(CurrentUser == null){ // no one else is logged in
					setCurrentUser(u);
					this.loginCompleted.emit(true);					

					console.log("logged in ", CurrentUser);
					this.success.nativeElement.textContent = 'You have successfully logged in';
					this.username.nativeElement.value = ''; // reset form
					
				}
			}else{
				this.error.nativeElement.textContent = 'Please register your username before login';
				this.username.nativeElement.value = ''; // reset form
			}
		}else{
			this.error.nativeElement.textContent = 'Invalid username';
			this.username.nativeElement.value = '';
		}
	}
}
