import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const TOKEN = 'Token 2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  route = 'user';

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  // constructor(private httpService: HttpService) { }

  // // getUsers(): Observable<User[]> {
  // //   return this.httpService.post<User[]>(this.route);
  // // }

}
