import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-salary-maker',
  templateUrl: './salary-maker.component.html',
  styleUrls: ['./salary-maker.component.css']
})
export class SalaryMakerComponent implements OnInit {

  private salaryMaker: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.salaryMaker = this.formBuilder.group({
      basicSalary: new FormControl(''),
      dateAndYear: new FormControl('')
    });

  }
  onSubmit(): void {
  }
}
