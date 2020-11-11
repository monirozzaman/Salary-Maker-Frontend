import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';

import {EmployeesComponent} from './components/employees/employees.component';
import {SalaryMakerComponent} from './components/salary-maker/salary-maker.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {EmployeesListComponent} from './components/employees-list/employees-list.component';
import {AddNewEmployeeComponent} from './components/add-new-employee/add-new-employee.component';
import {FlashMessagesModule} from 'angular2-flash-messages';

import {EmployeeService} from './services/employee.service';
import {BankService} from './services/bank.service';

import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    SalaryMakerComponent,
    DashboardComponent,
    EmployeesListComponent,
    AddNewEmployeeComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
    BankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
