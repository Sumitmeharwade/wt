// src/app/registration/registration.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData = {
    name: '',
    rollNo: '',
    department: ''
  };

  constructor(public dataservice:DataService){

  }

  submitForm() {
    alert("Form Submitted successfully !!!")
    this.dataservice.onSave(this.formData)
  }
}
