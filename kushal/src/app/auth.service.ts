import { Injectable } from '@angular/core';
interface user {
  name : string;
  username: string;
  password: string;
    
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loggedIn: boolean;
  
  Users: user[]=[
    { name: 'John Doe', username: 'john_doe', password: 'password123' },
    { name: 'cde Doe', username: 'cde_doe', password: 'cde123' }
  ]

  constructor() { 
    this.loggedIn = false;
    
    
  }
  verify = (un: string, pwd: string): boolean => {
    const user = this.Users.find(u => u.username === un && u.password === pwd);
    return !!user;
  }
}
