import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { User } from '../data/user';
import { Users } from '../data/mock-users';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
	

	private usersUrl = 'api/users';  // URL to web api
 
 
  constructor(private http: HttpClient, private messageService: MessageService) { }
  
   getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('UserService: fetched users');
    return of(Users);
  }
  
   getUser(id: number): Observable<User> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`UserService: fetched user id=${id}`);
    return of(Users.find(user => user.id === id));
  }
  
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }
    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); // log to console instead
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }
  
    private log(message: string) {
    //this.messageService.add(`UserService: ${message}`);
  }
  
  
}
