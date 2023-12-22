import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  issuedBooks: any[];

  constructor(private dataService: DataService) {
    this.issuedBooks = this.dataService.getIssuedBooks();
  }
}