import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ChatService } from '../service/chat.service';
import { SocketIOService } from '../service/socketio.service';
import { RoomService } from '../service/room.service';
 
import { Room } from '../data/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css'],
	providers: [ ChatService, SocketIOService ]
})
export class RoomDetailComponent implements OnInit {
	@ViewChild('chat', { static: false }) chat;	

	room: Room;
	msg: string = '';
	
  constructor(private chatService: ChatService,
		private socketService: SocketIOService,
		private roomService: RoomService,
		private route: ActivatedRoute,
		private location: Location) { }

  ngOnInit() {
	console.log("socket set to: ", this.socketService.socket);
	this.getRoom();
	this.socketService.socket.on('message', ( data ) => { this.chat.nativeElement.append("\n" + data.text) })
  }
	getRoom() {
		const id = this.route.snapshot.paramMap.get('id');
		this.roomService.getRoom(id)
			.subscribe(room => this.room = room);
	}	
	send(txt){
		this.chatService.send(txt);
		this.chat.nativeElement.append(document.createElement("br"));
	}
	goBack(){
		this.location.back();
	}
}
