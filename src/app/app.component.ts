import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import {} from 'googlemaps';

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
	@ViewChild('mapElement', { static: false }) mapElement: ElementRef;
	map: google.maps.Map;

	title = 'geoloc';
	users = Users;
	loggedout: boolean = true;
	loggedin: boolean = false;

	log: boolean = true;
	out: boolean = false;
	
	constructor(private socketService: SocketIOService,
			private chat: ChatService) { }

	ngOnInit() {
		console.log("initial socket: ", this.socketService.socket);
		this.socketService.socket.on('connect', () => {
			console.log('connected to server');
		});
	
		if(CurrentUser !== null){
			this.loggedin = true;
			this.loggedout = false;
		}
		this.mapElement.nativeElement.style = "height: 0px;";
		
	}
	mapInit(){
		const mapProps: google.maps.MapOptions = {                                                                                      center: new google.maps.LatLng(35.2271, -80.8431),
                        zoom: 11,                                                                                                       };
                this.map = new google.maps.Map(this.mapElement.nativeElement, mapProps);
	}
	showLogout(){ this.out = true; } // logout user
	show(){ this.log = true; } // show login form
	hide(){ this.log = false; } // hide login form
	
	onLogin(login: boolean){
		console.log("caught login");
		this.loggedin = true;
		this.loggedout = false;
		
		this.mapElement.nativeElement.style = "height: 500px; width:100%;";		

		this.mapInit();
                var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(35, -80),
                        map: this.map,
                });
                marker.setMap(this.map);
	}
	onLogout(o: boolean){
		console.log("caught logout");
		this.loggedin = false;
		this.loggedout = true;
	}

	send() {
		this.chat.send("Text Message");
	}
}
