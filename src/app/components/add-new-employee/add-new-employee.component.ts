import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

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
      employeeName: new FormControl(''),
      gradeName: new FormControl(''),
      phone: new FormControl(''),
      bAcNo: new FormControl(''),
      address: new FormControl('')
    });
  }
  onSubmit(): void {
  }
}
