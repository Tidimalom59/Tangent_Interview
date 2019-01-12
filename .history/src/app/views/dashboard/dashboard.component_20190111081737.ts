import { Component, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';
import { Chart } from 'chart.js';

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
  noJun = 0;
  noSen = 0;
  noGrad = 0;
  noInt = 0;
  chart: any = [];
  levels = [];

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

    this.employee.getEmployees().subscribe((res: any) => {
      console.log(res);
      res.forEach(element => {
        console.log(element);
        if (element.position) {
          if (element.position.level === 'Senior') {
            this.levels.push(element.position.level);
            this.noSen++;
          }
          if (element.position.level === 'Junior') {
            this.levels.push(element.position.level);
            this.noJun++;
          }
          if (element.position.level === 'Graduate') {
            this.levels.push(element.position.level);
            this.noGrad++;
          }
          if (element.position.level === 'Intermediate') {
            this.levels.push(element.position.level);
            this.noInt++;
          }
        }
      });

      this.chart = new Chart('canv', {
        type: 'bar',
        data: {
          labels: ['Graduates', 'Junior', 'Intermediates', 'Senior'],
          datasets: [
            {
              data: [this.noGrad, this.noJun, this.noInt, this.noSen],
              borderColor: '#3cba9f',
              borderWidth: 2,
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            display: true,
            labels: {
              fontColor: 'rgb(255, 99, 132)'
            }
          },
          scales: {
            xAxes: [{ display: true }],
            yAxes: [{ display: true }]
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
