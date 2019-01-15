import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  public leaves: any;

  constructor(private leave: ProfileService) { }

  ngOnInit() {
    this.getReview();
  }

  getReview() {
    this.leave.getReviews().subscribe(resp => {
      console.log(resp);
      this.leaves = resp;
    });
  }

}
