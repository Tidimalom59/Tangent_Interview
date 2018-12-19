import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { EmployeePosition } from '../models/employeePosition';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  route = 'employee';

  constructor(private httpService: HttpService) { }

  getPositions(): Observable<EmployeePosition[]> {
    return this.httpService.get<EmployeePosition[]>(this.route);
  }

}
