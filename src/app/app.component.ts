import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD';
  constructor(private dialog:MatDialog){}
  openAddEditEmp(){
    this.dialog.open(AddEditEmpComponent);
  }
}
