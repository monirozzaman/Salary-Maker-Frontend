import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  private addEmployee: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addEmployee = this.formBuilder.group({
      employeeName: [''],
      gradeName: [''],
      phone: [''],
      bAcNo: [''],
      address: ['']
    });
  }
  onSubmit(): void {
  }
}
