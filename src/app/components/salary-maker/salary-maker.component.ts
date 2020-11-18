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
  private p = 1;
  private salaryMaker: FormGroup;
  private totalPaidSalary;
  private monthAndYear;
  private remainBalance;
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
    if (this.validator()) {
      this.employeeService.getSalarySheet(this.salaryMaker.value.basicSalary, 'Nov-2020').subscribe(res => {
        this.totalPaidSalary = res.totalPaidSalary;
        this.remainBalance = res.remainBankBalance;
        this.monthAndYear = res.monthAndYear;
        this.salarySheet = res.sheet;
      }, error => {
        if (error.status === 406) {
          this.showErrorMessage('Insufficient Fund');
        }
      });
    } else {
      this.showErrorMessage('Empty Field');
    }

  }

  validator(): boolean {
    if (this.salaryMaker.value.basicSalary === '') {
      return false;
    }
    return true;
  }

  showErrorMessage(mgs): void {
    this.flashMessagesService.show(mgs, {cssClass: 'alert-danger', timeout: 2000});

  }
}
