//sends messages to socket service
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
//import { share } from "rxjs/operator/share";
//import {Socket} from 'ng-socket-io';

//add map operator
import {map} from 'rxjs/operators';

import { SocketIOService } from './socketio.service';

@Injectable()
export class ChatService {
  msg: string;
  // Our constructor calls our socketService connect method
  constructor(private socketService: SocketIOService) {}
  
  // Our simplified interface for sending
  // messages back to our socket.io server
  send(msg: string) {
    this.socketService.socket.emit('message', msg);
  }

  /*getMsg(){
    return this.socketService.socket.
              .fromEvent<any>('message')
              map(data => data.msg);
  }*/
  close(){
    this.socketService.socket.disconnect();
  }

}
