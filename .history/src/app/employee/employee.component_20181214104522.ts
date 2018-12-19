import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // Inject AuthService
  public employees: any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.employeeGet();
  }

  employeeGet() {
    this.httpService.employeeGet().subscribe(resp => {
      console.log(resp);
      this.httpService = resp;
    });
  }

}
