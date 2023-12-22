import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService)
  {

  }
  title = 'libproj';
  signout = () => {
    this.authService.loggedIn = false;
  }
}
