import { Component } from '@angular/core';
import { DataService, User } from '../data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  studentsWithFines: any[];
  studentlist:User[]=[]

  constructor(private dataService: DataService) {
    this.studentsWithFines = this.dataService.getStudentsWithFines();
    this.studentlist=this.dataService.getData()
    console.log(this.studentlist)
  }

  calculateFine(returnDate: Date): number {
    // Implement your fine calculation logic here
    // For example, calculate the difference between the return date and the current date
    const currentDate = new Date();
    const diffInDays = Math.floor((currentDate.getTime() - returnDate.getTime()) / (1000 * 3600 * 24));
    
    // Assume a fine of 30/- per day
    const fine = diffInDays * 30;

    return fine > 0 ? fine : 0;
  }
}
