// src/app/book-issue/book-issue.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {
  formData = {
    studentName: '',
    bookTitle: '',
    returnDate: ''
  };

  constructor(private dataService: DataService){}

  issueBook() {
    alert("Book issued successfully !!")
    this.dataService.onSetBooks(this.formData)
  }
}


