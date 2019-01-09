import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // Inject AuthService
  public employees: any;
  public totalEmployees: number;

  public searchText: string;
  public employeeData: any;

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();

    this.employeeData = [
      {'name': 'Captain America', 'email': 'captain@gmail.com', 'phone number': '0824478876', 'position': 'Front-end Development Senior'}
    ];
  }

  getEmployee() {
    this.employee.getEmployees().subscribe(resp => {
      console.log(resp);
      this.employees = resp;
      this.totalEmployees = resp.length;
    });
  }

}
