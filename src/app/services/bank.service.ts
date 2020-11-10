import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {empty, Observable, of} from 'rxjs';


@Injectable()
export class BankService {

  baseUrl: string = environment.baseUrl;

  public getMyBankAcDetails(acNo): Observable<any> {
    const mockJsonData = {
      accountNo: '3245324523',
      acHolderName: 'Moniruzzaman Roni',
      accountType: 'saveing',
      currentBalance: '12000',
      bankName: 'Dutch Bangla Bank Ltd.',
      branchName: 'Savar Branch'
    };
    console.log(acNo);
    return of(mockJsonData);

  }

  public addMoneyInMyBankAc(acNo, amount): Observable<any> {
    console.log(acNo, amount);
    return empty(); }

}
