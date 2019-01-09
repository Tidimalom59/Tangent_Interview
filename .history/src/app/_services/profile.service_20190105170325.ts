import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  route = 'employee/me';

  constructor(private httpService: HttpService) { }

  getProfiles(): Observable<Employee[]> {
    return this.httpService.get<Employee[]>(this.route);
  }

  getReviews(): Observable<Employee> {
    return this.httpService.get<Employee>(this.route);
  }

}
