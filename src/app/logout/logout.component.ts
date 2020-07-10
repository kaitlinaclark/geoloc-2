import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { setCurrentUser } from '../data/current-user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
	@Output() logoutCompleted = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit() {
	setCurrentUser(null);    
	this.logoutCompleted.emit(true);    
	this.router.navigate(['/']);
  }

}
