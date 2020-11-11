import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {EmployeeService} from '../../services/employee.service';
import {BankService} from '../../services/bank.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  private addEmployee: FormGroup;

  constructor(private flashMessagesService: FlashMessagesService,
              private employeeService: EmployeeService, private bankService: BankService,
              private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.addEmployee = this.formBuilder.group({
      employeeName: new FormControl(''),
      gradeName: new FormControl(''),
      phone: new FormControl(''),
      bAcNo: new FormControl(''),
      address: new FormControl(''),
      branchName: new FormControl(''),
      acType: new FormControl(''),
      bankName: new FormControl('')
    });
  }

  onSubmit(): void {
    this.employeeService.addNewEmployee(this.addEmployee.value.employeeName
      , this.addEmployee.value.gradeName
      , this.addEmployee.value.phone
      , this.addEmployee.value.address
      , this.addEmployee.value.bankName
      , this.addEmployee.value.branchName
      , this.addEmployee.value.bAcNo
      , this.addEmployee.value.acType).subscribe(res => {

      this.showSuccessMessage('Add Successful');
      this.router.navigate(['employees/employees-list']);
    });
  }

  showSuccessMessage(mgs): void {
    this.flashMessagesService.show(mgs, {cssClass: 'alert-success', timeout: 2000});

  }
}
