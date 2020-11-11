import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BankService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public getMyBankAcDetails(acNo): Observable<any> {
    const url = this.baseUrl + 'bank/accounts/' + acNo + '/details';
    return this.http.get(url);

  }

  public addMoneyInMyBankAc(acNo, amount): Observable<any> {
    const rBody = {
      'acNo': acNo,
      'amount': amount
    };
    const url = this.baseUrl + 'bank/add/balance';
    return this.http.put(url, rBody);
  }

}
