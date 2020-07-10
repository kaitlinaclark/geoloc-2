import { User } from './user';

export var CurrentUser: User = null;

export function setCurrentUser(u: User){
	CurrentUser = u;
}
