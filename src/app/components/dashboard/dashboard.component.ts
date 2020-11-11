import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {EmployeeService} from '../../services/employee.service';
import {BankService} from '../../services/bank.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private isShowBankInputForm = false;
  private numberOfEmployee;
  private amount: string;
  private currentBalanceOfCompany;
  private addBalance: FormGroup;
  constructor( private flashMessagesService: FlashMessagesService,
               private employeeService: EmployeeService, private bankService: BankService,
               private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadData();
    this.addBalance = this.formBuilder.group({
      amount: new FormControl('')
    });
  }
  setIsShowBankInputForm( value ): void {
    this.isShowBankInputForm = value;
  }
  loadData(): void {
    this.employeeService.getEmployeesList().subscribe(res => {
      this.numberOfEmployee = res.length;
    });
    this.bankService.getMyBankAcDetails('42885412').subscribe(res => {
      this.currentBalanceOfCompany = res.currentBalance;
    });
  }
  onSubmit(): void {
    this.amount = this.addBalance.value.amount;
    this.bankService.addMoneyInMyBankAc('42885412', this.amount).subscribe(res => {
      this.setIsShowBankInputForm( false );
      this.loadData();
      this.showSuccessMessage('Balance Add Successful');

    });
  }

  showSuccessMessage(mgs): void {
    this.flashMessagesService.show(mgs, {cssClass: 'alert-success', timeout: 2000});

  }
}
