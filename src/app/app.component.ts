import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kletech';
  a:number=10;
  b:number=20;
  c:number;
  constructor()
  {
    this.c=0
  }
  add()
  {
    this.c=this.a+this.b;
  }
}

