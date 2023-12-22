// src/app/book-issue/book-issue.component.ts
import { Component } from '@angular/core';

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

  issueBook() {
    alert("Book issued successfully !!")
    alert('Form Data: \n' + this.formData.studentName + '\n' + this.formData.bookTitle + '\n' + this.formData.returnDate);
  }
}


