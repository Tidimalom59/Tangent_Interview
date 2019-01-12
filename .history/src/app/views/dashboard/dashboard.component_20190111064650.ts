import { Component, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';
import { Data } from '@angular/router';
import { Chart } from 'chart.js';
import { Employee } from '../../models/employee';

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

  // chart
  data: Data[];
  name = [];
  level = [];
  chart: any = [];

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

    // Chart
    this.employee.get(this.employee).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.name.push(y.name);
        this.level.push(y.level);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.name,
          datasets: [
            {
              data: this.level,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }

  getEmployee() {
    this.employee.getEmployees().subscribe(resp => {
      console.log(resp);
      this.employees = resp;
    });
  }

  // background image
  getUrl() {
    return 'url(\'../../assets//tangent.png\')';
  }

}
