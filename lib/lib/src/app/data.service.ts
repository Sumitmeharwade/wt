// src/app/data.service.ts
import { Injectable } from '@angular/core';

export interface User{
  name:string,
  rollNo:string,
  department:string
}

export interface Book{
  studentName : string,
  bookTitle : string,
  returnDate : string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  students :User[] = [];
  books : Book[] = [];
  
  onSave(data:User){
    this.students.push(data)
    console.log(this.students)
  }

  getData(){
    console.log(this.students)
    return this.students;
  }

  onSetBooks(data:Book){
    this.books.push(data)
    console.log(this.books)
  }

  getIssuedBooks(): Book[] {
    console.log(this.books)
    return this.books;
  }

  // getStudentsWithFines(): any[] {
  //   // Implement logic to calculate fines and filter students with fines
  //   const currentDate = new Date();
    
  //   return this.books.filter(book => {
  //     // Replace the condition with your actual logic for checking return date and calculating fines
  //     return book.returnDate < currentDate;
  //   });
  // }

  // calculateFine(returnDate: Date): number {
  //   // Implement your fine calculation logic here
  //   const currentDate = new Date();
  //   const diffInDays = Math.floor((currentDate.getTime() - returnDate.getTime()) / (1000 * 3600 * 24));

  //   // Assume a fine of 30/- per day
  //   const fine = diffInDays * 30;

  //   return fine > 0 ? fine : 0;
  // }
}
