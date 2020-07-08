export class User {
  id: number;
  name: string;
  cur: number;
  friends: string[]
  constructor( id: number,  name: string){
	  this.id=id;
	  this.name=name;
	  this.cur=0;
	  this.friends=[" "]
  }
}
