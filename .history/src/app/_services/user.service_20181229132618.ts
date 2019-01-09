import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { JwtModule } from '@auth0/angular-jwt';

@Injectable()
export class UserService {

  public BASE_URL = 'http://staging.tangent.tngnt.co/api-token-auth/';
  private httpheaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  login(user: User) {
    const authDetails = {
      'username': user.Username,
      'password': user.Password
    };
    return this.http.post(this.BASE_URL, authDetails, { headers: this.httpheaders });
  }

  logout(user: User) {
    throw new Error('Method not implemented.');
  }

}