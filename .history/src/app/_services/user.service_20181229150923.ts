import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { JwtModule } from '@auth0/angular-jwt';

@Injectable()
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;

  public BASE_URL = 'http://staging.tangent.tngnt.co/api-token-auth/';
  private httpheaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  login(user: User) {
    const authDetails = {
      'username': user.Username,
      'password': user.Password
    };
    return this.http.post<any>(this.BASE_URL, authDetails, { headers: this.httpheaders });
  }

  logout() {
    throw new Error('Method not implemented.');
  }

}
