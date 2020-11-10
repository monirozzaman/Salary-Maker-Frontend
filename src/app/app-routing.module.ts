import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {SalaryMakerComponent} from './components/salary-maker/salary-maker.component';
import {AddNewEmployeeComponent} from './components/add-new-employee/add-new-employee.component';
import {EmployeesListComponent} from './components/employees-list/employees-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'employees', component: EmployeesComponent, children: [
          {path: 'add-new-employee' , component: AddNewEmployeeComponent},
          {path: 'employees-list' , component: EmployeesListComponent}
        ]},
      {path: 'employee-salary', component: SalaryMakerComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
