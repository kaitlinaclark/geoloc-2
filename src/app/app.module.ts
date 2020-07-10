import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { UserComponent } from './user/user.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';

import {SocketIOService} from './service/socketio.service';
import { ChatService } from './service/chat.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddRoomComponent,
    UserComponent,
    RoomComponent,
    RoomsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [SocketIOService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
