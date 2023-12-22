import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrl: './new2.component.css'
})
export class New2Component {
  username:string='';
  password:string='';
  cred:any;
  courses:string[];
  i:number=0;
  msg:string='';
  date:any;
  price:any=1000000;
  constructor(private disp:DisplayService)
  {
    this.cred=[{username:'neel',password:'123'},
  {username:'nandan',password:'345'}];

  this.courses=disp.dispcourses();
  this.date=disp.dispdate();
  }
  validate()
  {
    for(this.i=0;this.i<2;this.i++)
    {
      if(this.username==this.cred[this.i].username && this.password==this.cred[this.i].password)
      {
        this.msg='valid user';
        break;
      }
      else
      {
        this.msg='invalid user';
      }

    }
  }



}
