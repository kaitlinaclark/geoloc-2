import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SocketIOService } from './service/socketio.service';
import { ChatService } from './service/chat.service';
import { UserService } from './service/user.service';

import { User } from './data/user';
import { Users } from './data/mock-users';

import { CurrentUser } from './data/current-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	title = 'geoloc';
	users = Users;
	loggedout: boolean = true;
	loggedin: boolean = false;

	log: boolean = true;

	constructor(private socketService: SocketIOService,
			private chat: ChatService) { }

	ngOnInit() {
		this.socketService.connect();
		this.socketService.socket.on('connect', () => {
			console.log('connected to server');
		});
	
		if(CurrentUser !== null){
			this.loggedin = true;
			this.loggedout = false;
		}
	}
	show(){ // show login form
		this.log = true;
	}
	hide(){ // hide login form
		this.log = false;
	}
	
	onLogin(login: boolean){
		console.log("caught login");
		this.loggedin = true;
		this.loggedout = false;
	}

	send() {
		this.chat.send("Text Message");
	}
}
