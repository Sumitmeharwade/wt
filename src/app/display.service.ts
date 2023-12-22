import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }
  dispcourses()
  {
    alert("in service");
    return(["c","c++","java","se","cs"]);
  }
  dispdate()
  {
    let dt=new Date();
    return(dt);
  }
}
