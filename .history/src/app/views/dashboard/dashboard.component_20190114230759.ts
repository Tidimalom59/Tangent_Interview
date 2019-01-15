import { Component, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../../_services/employee.service';
import { Chart } from 'chart.js';
import { CalendarView } from 'angular-calendar';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() enabled = true;
  public employees: any;
  public position: any;
  public reviews: any;
  public holidays: any;

  // Declare/Initialize Calender values
  viewBirthDay: Date = new Date();
  viewDate: Date = new Date();
  events = [];
  view: CalendarView = CalendarView.Month;

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

  // Declare/Initialize Gender variables
  noFemale = 0;
  noMale = 0;
  chart2: any = [];
  genders = [];

    // Declare/Initialize Race variables
    noBlack = 0;
    noWhite = 0;
    noColoured = 0;
    noIndianAsian = 0;
    noNonDominant = 0;
    chart3: any = [];
    races = [];

  // Chart click events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private employee: EmployeeService, private review: ProfileService) { }

  ngOnInit() {
    this.getEmployee();
    this.getNextReview();
    this.getHoliday();

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
          labels: ['Graduates', 'Juniors', 'Intermediates', 'Seniors'],
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
          labels: ['H.R', 'Front-End Devs', 'UX Designers', 'Acountants', 'Back-End Devs', 'General Managers', 'Project Managers', 'Directors'],
          datasets: [
            {
              // tslint:disable-next-line:max-line-length
              data: [this.noHr, this.noFrontEnd, this.noUxDesigners, this.noAccountant, this.noBackend, this.noGeneralMan, this.noProjectMan, this.noDirector],
              label: 'Position Roles',
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

    // Beginning of Gender Doughnut Chart information
    this.employee.getEmployees().subscribe((res: any) => {
      console.log(res);
      res.forEach(element => {
        console.log(element);
        if (element) {
          if (element.gender === 'F') {
            this.genders.push(element.gender);
            this.noFemale++;
          }
          if (element.gender === 'M') {
            this.genders.push(element.gender);
            this.noMale++;
          }
        }
      });

      this.chart2 = new Chart('canvas1', {
        type: 'doughnut',
        data: {
          labels: ['Female', 'Male'],
          datasets: [
            {
              data: [this.noFemale, this.noMale],
              label: 'Gender Count',
              backgroundColor: ['rgba(255,0,255, .5)', 'rgba(0,0,255, .5)'],
              borderColor: 'rgb(0,255,0)',
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
      // End of Gender Doughnut Chart information

          // Beginning of Race Doughnut Chart information
    this.employee.getEmployees().subscribe((res: any) => {
      console.log(res);
      res.forEach(element => {
        console.log(element);
        if (element) {
          if (element.race === 'B') {
            this.genders.push(element.race);
            this.noBlack++;
          }
          if (element.race === 'W') {
            this.genders.push(element.race);
            this.noWhite++;
          }
          if (element.race === 'C') {
            this.genders.push(element.race);
            this.noColoured++;
          }
          if (element.race === 'I') {
            this.genders.push(element.race);
            this.noIndianAsian++;
          }
          if (element.race === 'N') {
            this.genders.push(element.race);
            this.noNonDominant++;
          }
        }
      });
      this.chart3 = new Chart('canvas2', {
        type: 'pie',
        data: {
          labels: ['Black', 'White', 'Coloured', 'Indian/Asian', 'Non-Dominant'],
          datasets: [
            {
              data: [this.noBlack, this.noWhite, this.noColoured, this.noIndianAsian, this.noNonDominant],
              label: 'Gender Count',
              // tslint:disable-next-line:max-line-length
              backgroundColor: ['rgba(0,0,0, .5)', 'rgba(255,255,255, .5)', 'rgba(84, 43, 1, .5)', 'rgba(184, 94, 3, .5)', 'rgba(7, 206, 34, .5)'],
              borderColor: 'rgb(0,255,0)',
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
      // End of Race Doughnut Chart information

  }

  getEmployee() {
    this.employee.getEmployees().subscribe(resp => {
      console.log(resp);
      this.employees = resp;
    });
  }

  getNextReview() {
    this.review.getReviews1().subscribe(resp => {
      console.log(resp);
      this.reviews = resp;
    });
  }

  getHoliday() {
    this.employee.getHolidays().subscribe(resp => {
      console.log(resp);
      this.holidays = resp;
    });
  }

  // background image
  getUrl() {
    return 'url(\'../../assets//tangent.png\')';
  }

}
