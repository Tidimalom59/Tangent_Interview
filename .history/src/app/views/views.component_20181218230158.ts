import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  collapedSideBar: boolean;

  constructor() { }

  ngOnInit() { }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

}
