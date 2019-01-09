import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() enabled = true;

  // // Doughnut
  // public doughnutChartLabels:string[] = ['In-Progress', 'Yesterday', 'Today'];
  // public doughnutChartData:number[] = [350, 250, 100];
  // public doughnutChartType:string = 'doughnut';

  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }

  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

  constructor() { }

  ngOnInit() {
  }

}
