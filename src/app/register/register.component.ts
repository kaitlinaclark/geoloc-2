import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Users } from '../data/mock-users';
import { User } from '../data/user';
import { UserService } from '../service/user.service';


import { MessageService } from '../service/message.service';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})

export class RegisterComponent implements OnInit {
	@ViewChild('username', { static: false }) username;
	@ViewChild('error', { static: false }) error;
	@ViewChild('success', { static: false }) success;

	 users: User[] = Users;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
  }
	getUsers(): Observable<User[]>{
		return of (Users);
	}
  
	add(): void {
		let last_u = this.users[this.users.length-1];
		
		var id = last_u.id + 1;
		var username = this.username.nativeElement.value;
	
		if(/\S/.test(username)){
			var unique = true; //is username unique
			for(var i = 0; i < this.users.length; i++){ if(this.users[i].name === username){unique = false;}}
			if(unique){
				var u = new User(id, username);
				this.success.nativeElement.textContent = `New User added: ${this.username.nativeElement.value}`;
				this.username.nativeElement.value = '';
			
				Users.push(u);
			}else{
				this.error.nativeElement.textContent = 'User not added, duplicate username';
				this.username.nativeElement.value = '';
			}
		}
		else{
			this.messageService.add('User not added, due to invalid username');
		}
	}
	
	
}
