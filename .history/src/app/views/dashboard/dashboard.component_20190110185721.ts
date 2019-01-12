import { Component, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() enabled = true;
  public employees: any;

  viewDate: Date = new Date();
  events = [];

  // Doughnut
  public doughnutChartLabels: string[] = ['In-Progress', 'Yesterday', 'Today'];
  public doughnutChartData: number[] = [350, 250, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employee.getEmployees().subscribe(resp => {
      console.log(resp);
      this.employees = resp;
    });
  }

}
