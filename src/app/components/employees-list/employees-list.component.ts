import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {EmployeeService} from '../../services/employee.service';
import {BankService} from '../../services/bank.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  private employeeList;
  private employeeListForRankTwo: Array<any> = [];
  private employeeListForRankThree: Array<any> = [];
  private employeeListForRankFour: Array<any> = [];
  private employeeListForRankFive: Array<any> = [];
  private employeeListForRankSix: Array<any> = [];

  constructor(private flashMessagesService: FlashMessagesService,
              private employeeService: EmployeeService, private bankService: BankService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loadData();

  }

  loadData(): void {
    this.employeeService.getEmployeesList().subscribe(res => {
      this.employeeList = res;
      // res.forEach(employee => {
      //   if (employee.gradeOfEmployee.toLowerCase() === 'grade 1') {
      //     this.employeeListForRankOne.push(employee);
      //   } else if (employee.gradeOfEmployee.toLowerCase() === 'grade 2') {
      //     this.employeeListForRankTwo.push(employee);
      //   } else if (employee.gradeOfEmployee.toLowerCase() === 'grade 3') {
      //     this.employeeListForRankThree.push(employee);
      //   } else if (employee.gradeOfEmployee.toLowerCase() === 'grade 4') {
      //     this.employeeListForRankFour.push(employee);
      //   } else if (employee.gradeOfEmployee.toLowerCase() === 'grade 5') {
      //     this.employeeListForRankFive.push(employee);
      //   } else if (employee.gradeOfEmployee.toLowerCase() === 'grade 6') {
      //     this.employeeListForRankSix.push(employee);
      //   }
      // });
    });
  }
}
