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
  public positions: any;
  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
    this.getPosition();
  }

  getEmployee() {
    this.employee.getEmployees().subscribe(resp => {
      console.log(resp);
      this.employees = resp;
    });
  }

  getPosition() {
    this.employee.getPositions().subscribe(resp => {
      console.log(resp);
      this.positions = resp;
    });
  }

}
