import { Component } from '@angular/core';
import { Book, DataService } from '../data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent {

  bookList: Book[]=[]

  constructor(private dataService: DataService) {
    this.bookList = this.dataService.getIssuedBooks();
  }
}