import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string;
  password: string;
  // loggedIn: boolean;
  constructor(public authService: AuthService) { 
    this.username = '';
    this.password = '';
    this.authService.loggedIn = false;
  }
  login = () => {
    if(this.authService.verify(this.username, this.password)){
      this.authService.loggedIn = true;
      alert('Login successful');
    }
    else{
      alert('Login failed');
    }
    
    // console.log('login');
  }

}
