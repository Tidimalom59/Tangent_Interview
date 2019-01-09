import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';

// tslint:disable-next-line:use-pipe-transform-interface
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

@Pipe({
  name: 'count'
})

export class EmployeeComponent implements OnInit, PipeTransform {

  // Inject AuthService
  public employees: any;
  public totalEmployees: number;

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employee.getEmployees().subscribe(resp => {
      console.log(resp);
      this.employees = resp;
      this.totalEmployees = resp.length;
    });
  }

  // pipe
  transform(employees, args) {
    if (!args) {
      return this.employees;
    } else if (typeof args === 'object') {

      // Update specified object key with count being passed through
      args.object[args.key] = employees.length;

      return employees;

    } else {
      return employees;
    }

  }

}
