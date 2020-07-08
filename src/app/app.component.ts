import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SocketIOService } from './service/socketio.service';
import { ChatService } from './service/chat.service';
import { UserService } from './service/user.service';

import { User } from './data/user';
import { Users } from './data/mock-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'geoloc';
	users = Users;
	check: number;
	constructor(private socketService: SocketIOService,
			private chat: ChatService) { }

	ngOnInit() {
		this.socketService.connect();
		this.socketService.socket.on('connect', () => {
			console.log('connected to server');
		});
	

	this.check = 0

	for(var i = 0; i < this.users.length; i++){
		if(this.users[i].cur == 1){
			this.check = 1;
		}
	}

	/*if(this.check == 1){ //one of the users is signed in
		document.getElementById('nav1').style.visibility = 'hidden';
		document.getElementById('nav2').style.visibility = 'visible';
	}else{
		document.getElementById('nav1').style.visibility = 'visible';
                document.getElementById('nav2').style.visibility = 'hidden';
	}*/
	}

	send() {
		this.chat.send("Text Message");
	}
}
