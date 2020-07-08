import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';

const routes: Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'rooms', component: RoomsComponent },
	{ path: 'add-room', component: AddRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
