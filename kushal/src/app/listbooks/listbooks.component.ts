import { Component } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrl: './listbooks.component.css'
})
export class ListbooksComponent {
  constructor(public bookService: BookserviceService)
  {

  }

}
