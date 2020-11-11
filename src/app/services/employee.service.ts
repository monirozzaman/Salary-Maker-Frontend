import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class EmployeeService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public getEmployeesList(): Observable<any> {

    const url = this.baseUrl + 'employees';
    return this.http.get(url);
  }

  public addNewEmployee(name, rank, phoneNo, address, bankName, branchName, acNo, acType): Observable<any> {
    const requestBody = {
      'name': name,
      'rank': rank,
      'phoneNo': phoneNo,
      'address': address,
      'bankName': bankName,
      'branchName': branchName,
      'acNo': acNo,
      'acType': acType
    };
    const url = this.baseUrl + 'employees/add';
    return this.http.post(url, requestBody);
  }

  public getSalarySheet(basicSalary, dateAndYear): Observable<any> {
    const rBody = {
      'basicSalary': basicSalary,
      'dateAndYear': dateAndYear
    };

    const url = this.baseUrl + 'employees/salary';
    return this.http.post(url, rBody);
  }


}
