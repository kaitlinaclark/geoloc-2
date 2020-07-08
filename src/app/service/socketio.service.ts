//communicates with server 
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class SocketIOService {

  // Our socket connection
  socket;

  constructor() { }

  connect() {
    this.socket = io(environment.SOCKET_ENDPOINT);
	}

}
