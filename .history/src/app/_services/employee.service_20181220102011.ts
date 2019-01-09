import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  route = 'employee';

  constructor(private httpService: HttpService) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpService.get<Employee[]>(this.route);
  }

  getEmployee1(): Observable<Employee> {
    return this.httpService.get<Employee>(this.route);
  }

}
