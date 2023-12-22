import { Injectable } from '@angular/core';
interface studentlist {
  studentName: string;
  bookName: string;
  issueDate: string;
  returnDate: string;
}
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  studentlists: studentlist[] = [];
  constructor() { 

  }
  issue(studentName: string, bookName: string, issueDate: string, returnDate: string) {
    this.studentlists.push({studentName, bookName, issueDate, returnDate});
  }
}
