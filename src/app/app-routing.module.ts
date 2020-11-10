import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {SalaryMakerComponent} from './components/salary-maker/salary-maker.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'employees', component: EmployeesComponent},
      {path: 'employee-salary', component: SalaryMakerComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
