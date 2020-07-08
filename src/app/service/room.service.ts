import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Room } from '../data/room';
import { Rooms } from '../data/mock-rooms';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private messageService: MessageService) { }
  
    getRooms(): Observable<Room[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('RoomService: fetched rooms');
    return of(Rooms);
  }
  
	 getRoom(id: number): Observable<Room> {
    // TODO: send the message _after_ fetching the hero
  //  this.messageService.add(`RoomService: fetched room id=${id}`);
    return of(Rooms.find(room => room.id === id));
  }
  
  
}
