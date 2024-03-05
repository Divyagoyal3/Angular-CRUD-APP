import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrl: './add-edit-emp.component.css'
})
export class AddEditEmpComponent {
 empForm:FormGroup;
 education :string[] = ['Matric', 'Diploma', 'Graduation' , 'Post Graduation'];

 constructor(private fb:FormBuilder){
  this.empForm = this.fb.group({
    firstName :[' '],
    lastName :[' '],
    email :[' '],
    dob : [' '],
    gender :[' '],
    education :[' '],
    company :[' '],
    exp :[' '],
    package :[' ']

  });
 }
 onFormSubmit(){
  if(this.empForm.valid){
    console.warn(this.empForm.value)
  }
 }
}
