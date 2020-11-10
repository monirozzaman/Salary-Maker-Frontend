import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {EmployeeService} from '../../services/employee.service';
import {BankService} from '../../services/bank.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private isShowBankInputForm = false;
  private numberOfEmployee;
  private currentBalanceOfCompany;
  private addBalance: FormGroup;
  constructor( private flashMessagesService: FlashMessagesService,
               private employeeService: EmployeeService, private bankService: BankService,
               private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadData();
    this.addBalance = this.formBuilder.group({
      amount: ['']
    });
  }
  setIsShowBankInputForm( value ): void {
    this.isShowBankInputForm = value;
    this.flashMessagesService.show('Welcome To TheRichPost.com', { cssClass: 'alert-success', timeout: 2000 });
  }
  loadData(): void {
    this.employeeService.getEmployeesList().subscribe(res => {
      this.numberOfEmployee = res.length;
    });
    this.bankService.getMyBankAcDetails('1233').subscribe(res => {
      this.currentBalanceOfCompany = res.currentBalance;
    });
  }
  onSubmit(): void {
    this.bankService.addMoneyInMyBankAc('2454654', this.addBalance.controls['amount'].value()).subscribe(res => {
      this.setIsShowBankInputForm( false );
    });
  }
}
