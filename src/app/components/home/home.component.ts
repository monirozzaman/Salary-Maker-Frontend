import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.showDashboard();
  }
  showDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
  showEmployeesList(): void {
    this.router.navigate(['employees/employees-list']);
  }
}
