import { Component, OnInit } from '@angular/core';
import { EmployeePositionService } from '../../_services/employeePosition.service';

@Component({
  selector: 'app-employee-position',
  templateUrl: './employee-position.component.html',
  styleUrls: ['./employee-position.component.css']
})
export class EmployeePositionComponent implements OnInit {

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
