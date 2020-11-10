import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { EmployeesComponent } from './components/employees/employees.component';
import { SalaryMakerComponent } from './components/salary-maker/salary-maker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {Route, RouterModule} from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    SalaryMakerComponent,
    DashboardComponent,
    EmployeesListComponent,
    AddNewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
