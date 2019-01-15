import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { Holidays } from '../models/holidays';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  route = 'employee';

  routeHoli = 'public-holidays';

  constructor(private httpService: HttpService) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpService.get<Employee[]>(this.route);
  }

  getHolidays(): Observable<Holidays[]> {
    return this.httpService.get<Holidays[]>(this.routeHoli);
  }

}
