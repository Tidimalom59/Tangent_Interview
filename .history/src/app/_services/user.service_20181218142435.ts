import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  route = 'user';

  constructor(private httpService: HttpService) { }

  getUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(this.route);
  }

}
