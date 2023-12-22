import { Component } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrl: './new1.component.css'
})
export class New1Component {
  Name: string="Kle";
  a:number=0;
  b:number=0;
  c:number=0;
  cities:any;
  constructor()
  {
    this.cities=["Hubli","Dharwad","Delhi"];
    this.c=0;
  }
  
 
 
add()
{
  this.c=this.a+this.b;
}

}
