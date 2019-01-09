import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: any;

  public totalEmployees: number;

  // Inject Employee Services
  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employee.getEmployees().subscribe(resp => {
      console.log(resp);
      console.log(resp.length);
      this.employees = resp;
      this.totalEmployees = resp.length;
    });
  }

}
