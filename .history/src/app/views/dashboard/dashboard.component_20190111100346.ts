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

  // Declare/Initialize Calender values
  viewDate: Date = new Date();
  events = [];

  // Declare/Initialize Seniority BarChart variables
  noJun = 0;
  noSen = 0;
  noGrad = 0;
  noInt = 0;
  chart: any = [];
  levels = [];

  // Declare/Initialize Position Roles variables
  noFrontEnd = 0;
  noBackend = 0;
  noProjectMan = 0;
  noGeneralMan = 0;
  noUxDesigners = 0;
  noDirector = 0;
  noHr = 0;
  noAccountant = 0;
  chart1: any = [];
  names = [];

  // Doughnut
  public doughnutChartLabels: string[] = ['In-Progress', 'Yesterday', 'Today'];
  public doughnutChartData: number[] = [350, 250, 100];
  public doughnutChartType = 'doughnut';

  // Chart click events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();

    // Beginning of Seniority Bar Chart information
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
              label: 'Seniority Data',
              backgroundColor: 'rgba(103, 58, 183, .5)',
              borderColor: 'rgb(50, 108, 100)',
              pointBackgroundColor: 'rgb(103, 58, 183)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(103, 58, 183, .8)',
              borderWidth: 3,
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            display: true,
          },
          scales: {
            xAxes: [{ display: true }],
            yAxes: [{ display: true }]
          }
        }
      });
    });
    // End of Seniority Bar Chart information

    // Beginning of Position Roles data
    this.employee.getEmployees().subscribe((res: any) => {
      console.log(res);
      res.forEach(element => {
        console.log(element);
        if (element.position) {
          if (element.position.name === 'Front-end Developer') {
            this.names.push(element.position.name);
            this.noFrontEnd++;
          }
          if (element.position.name === 'Back-end Developer') {
            this.names.push(element.position.name);
            this.noBackend++;
          }
          if (element.position.name === 'Project Manager') {
            this.names.push(element.position.name);
            this.noProjectMan++;
          }
          if (element.position.name === 'General Manager') {
            this.names.push(element.position.name);
            this.noGeneralMan++;
          }
          if (element.position.name === 'UX Designer') {
            this.names.push(element.position.name);
            this.noUxDesigners++;
          }
          if (element.position.name === 'Director') {
            this.names.push(element.position.name);
            this.noDirector++;
          }
          if (element.position.name === 'Human Resources') {
            this.names.push(element.position.name);
            this.noHr++;
          }
          if (element.position.name === 'Acountant') {
            this.names.push(element.position.name);
            this.noAccountant++;
          }
        }
      });

      this.chart1 = new Chart('canvas', {
        type: 'line',
        data: {
          // tslint:disable-next-line:max-line-length
          labels: ['Human Resources', 'Front-end Developer', 'UX Designer', 'Acountant', 'Back-end Developer', 'General Manager', 'Project Manager', 'Director'],
          datasets: [
            {
              // tslint:disable-next-line:max-line-length
              data: [this.noHr, this.noFrontEnd, this.noUxDesigners, this.noAccountant, this.noBackend, this.noGeneralMan, this.noProjectMan, this.noDirector],
              // label: 'Seniority Data',
              backgroundColor: 'rgba(103, 58, 183, .5)',
              borderColor: 'rgb(50, 108, 100)',
              pointBackgroundColor: 'rgb(103, 58, 183)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(103, 58, 183, .8)',
              borderWidth: 3,
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            display: true,
          },
          scales: {
            xAxes: [{ display: true }],
            yAxes: [{ display: true }]
          }
        }
      });
    });
    // End of Position roles data

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
