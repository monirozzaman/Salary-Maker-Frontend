import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {empty, Observable, of} from 'rxjs';


@Injectable()
export class EmployeeService {

  baseUrl: string = environment.baseUrl;

  public getEmployeesList(): Observable<any> {
    const mockJsonData = [
      {
        employeeId: '1234',
        employeeName: 'Moniruzzaman Roni',

        gradeOfEmployee: 'Grade 1',

        employeeAddress: 'Asulia,savar,dhaka',

        employeeMobileNo: '01988841890',

        bank: {
          accountNo: '3245324523',
          acHolderName: 'Moniruzzaman Roni',

          accountType: 'saveing',

          currentBalance: '12000',

          bankName: 'Dutch Bangla Bank Ltd.',
          branchName: 'Savar Branch'}
      }
    ];

    return of(mockJsonData);
  }

  public addNewEmployee(name, rank, phoneNo, acNo, address): Observable<any> {
    return empty(); }



}
