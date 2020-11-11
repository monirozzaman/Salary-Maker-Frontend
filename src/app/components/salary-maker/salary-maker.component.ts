import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {EmployeeService} from '../../services/employee.service';
import {BankService} from '../../services/bank.service';

@Component({
  selector: 'app-salary-maker',
  templateUrl: './salary-maker.component.html',
  styleUrls: ['./salary-maker.component.css']
})
export class SalaryMakerComponent implements OnInit {
  p: number = 1;
  private salaryMaker: FormGroup;
  private totalPaidSalary;
  private monthAndYear;
  private currentBalanceOfCompany;
  private salarySheet: Array<any> = [];

  constructor(private flashMessagesService: FlashMessagesService,
              private employeeService: EmployeeService, private bankService: BankService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.salaryMaker = this.formBuilder.group({
      basicSalary: new FormControl('')
    });

  }

  onSubmit(): void {
    this.employeeService.getSalarySheet(this.salaryMaker.value.basicSalary, 'Nov-2020').subscribe(res => {

      this.totalPaidSalary = res.totalPaidSalary;
      this.monthAndYear = res.monthAndYear;
      this.salarySheet = res.sheet;
    });

    this.bankService.getMyBankAcDetails('42885412').subscribe(res => {
      this.currentBalanceOfCompany = res.currentBalance;
    });

  }
}
