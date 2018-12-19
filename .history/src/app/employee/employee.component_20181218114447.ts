import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { EmployeePositionService } from '../_services/employeePosition.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // Inject AuthService
  public positions: any;
  constructor(private employeePos: EmployeePositionService) { }

  ngOnInit() {
    this.getPosition();
  }

  getPosition() {
    this.employeePos.getPositions().subscribe(resp => {
      console.log(resp);
      this.positions = resp;
    });
  }

}
