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
  employee: Employee = new Employee();
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.employeeGet(this.employee).then((user) => {
      console.log(user.json());
    })
      .catch((err) => {
        console.log(err);
      });
  }

}
