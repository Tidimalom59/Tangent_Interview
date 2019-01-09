import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public review: any;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.getReview();
  }

  getReview() {
    this.profile.getReviews().subscribe(resp => {
      console.log(resp);
      this.review = resp;
    });
  }

}
