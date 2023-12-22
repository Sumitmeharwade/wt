import { Component } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
@Component({
  selector: 'app-issuebooks',
  templateUrl: './issuebooks.component.html',
  styleUrl: './issuebooks.component.css'
})
export class IssuebooksComponent {
  studentName: string;
  bookName: string;
  issueDate: string;
  returnDate: string;
  constructor(public bookService: BookserviceService){
  this.studentName = '';
  this.bookName = '';
  this.issueDate = '';
  this.returnDate = '';
  }
  issue(){
    alert('Book Issued Successfully');
    this.bookService.issue(this.studentName, this.bookName, this.issueDate, this.returnDate);
    this.studentName = '';
    this.bookName = '';
    this.issueDate = '';
    this.returnDate = '';
    
  }

}
