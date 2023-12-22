// src/app/data.service.ts
import { Injectable } from '@angular/core';

export interface User{
  name:string,
  rollNo:string,
  department:string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  students :User[] = [];
  books = [];
  issuedBooks = [
    { studentName: 'Spoorti', bookTitle: 'Angular Basics', returnDate: new Date('2023-02-10') },
    { studentName: 'Mehwish', bookTitle: 'H C Verma', returnDate: new Date('2023-04-13') },
    { studentName: 'Ayesha', bookTitle: 'R D Sharma', returnDate: new Date('2023-12-11') },
    { studentName: 'Anam', bookTitle: 'Quantum physics', returnDate: new Date('2023-05-15') },
    { studentName: 'Maria', bookTitle: 'NCERT', returnDate: new Date('2023-09-17') },
    { studentName: 'Nisarga', bookTitle: 'HTML', returnDate: new Date('2023-08-01') },
    { studentName: 'Srushti', bookTitle: 'Machine Learning', returnDate: new Date('2023-01-10') },
  ];

  onSave(data:User){
    this.students.push(data)
    console.log(this.students)
  }

  getData(){
    console.log(this.students)
    return this.students;
  }

  getIssuedBooks(): any[] {
    return this.issuedBooks;
  }

  getStudentsWithFines(): any[] {
    // Implement logic to calculate fines and filter students with fines
    const currentDate = new Date();
    
    return this.issuedBooks.filter(book => {
      // Replace the condition with your actual logic for checking return date and calculating fines
      return book.returnDate < currentDate;
    });
  }

  calculateFine(returnDate: Date): number {
    // Implement your fine calculation logic here
    const currentDate = new Date();
    const diffInDays = Math.floor((currentDate.getTime() - returnDate.getTime()) / (1000 * 3600 * 24));

    // Assume a fine of 30/- per day
    const fine = diffInDays * 30;

    return fine > 0 ? fine : 0;
  }
}
