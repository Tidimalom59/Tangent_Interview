import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public employees: any;

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employee.getEmployee1().subscribe(resp => {
      console.log(resp);
      this.employees = resp;
    });
  }

}
