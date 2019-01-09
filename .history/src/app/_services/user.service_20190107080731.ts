import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { JwtModule } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public BASE_URL = 'http://staging.tangent.tngnt.co/api-token-auth/';
  private httpheaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  login(user: User) {
    const authDetails = {
      'username': user.Username,
      'password': user.Password
    };
    return this.http.post<any>(this.BASE_URL, authDetails, { headers: this.httpheaders });
  }

  logout() {
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
     // Ensure all auth items removed from localStorage
     localStorage.removeItem('access_token');
     localStorage.removeItem('id_token');
     localStorage.removeItem('profile');
     // Return to homepage
     this.router.navigate(['/']);
  }
}
