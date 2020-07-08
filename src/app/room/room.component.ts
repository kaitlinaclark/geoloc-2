//lists all available chats
import { Component, OnInit } from '@angular/core';
import { Room } from '../data/room';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: Room[];
  //when a room is selected
  selectedRoom: Room;
  msg: string = "Hello";
  constructor(
    private chatService: ChatService) { }

//runs when proj is served
  ngOnInit() {
    this.chatService.send(this.msg);
    
  }
	onSelect(room: Room): void {
		this.selectedRoom = room;
	}

 
}
