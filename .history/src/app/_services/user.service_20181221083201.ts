import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {

  public BASE_URL = 'http://staging.tangent.tngnt.co/api-token-auth/';
  private httpheaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  login(user): Promise<any> {
    // tslint:disable-next-line:prefer-const
    //let url = `${this.BASE_URL}/login`;
    return this.http.post(this.BASE_URL, user, { headers: this.httpheaders }).toPromise();
  }

}
