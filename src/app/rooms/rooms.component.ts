import { Component, OnInit } from '@angular/core';

import { Room } from '../data/room';
import { RoomService } from '../service/room.service';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
	
	rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
  	this.getRooms();
  }
  
  getRooms(): void {
    this.roomService.getRooms()
        .subscribe(rooms => this.rooms = rooms);
  }
  
}
