import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Rooms } from '../data/mock-rooms';
import { Room } from '../data/room';
import { RoomService } from '../service/room.service';


import { MessageService } from '../service/message.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
@ViewChild('chatname', {static: false}) chatname;
@ViewChild('error', {static: false}) error;
	rooms: Room[] = Rooms;
  constructor(private messageService: MessageService) { }

   ngOnInit() {
  }
  ngAfterViewInit(){
  }
	getRooms(): Observable<Room[]>{
		return of (Rooms);
	}
  
	add(): void{
		var RoomList= this.rooms;
		console.log(RoomList);
		let LastRoom=RoomList[RoomList.length-1];
		var id= LastRoom.id+1;
		var roomname = this.chatname.nativeElement.value;
		
			if(/\S/.test(roomname)){
				var r=new Room (id, roomname )
				Rooms.push(r);
			}
			else{
				this.error.nativeElement.textContent = 'Room not created due to invalid room name';
			}
		
	}

}
