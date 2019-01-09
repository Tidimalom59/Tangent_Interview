import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public reviews: any;

  constructor(private empReview: ProfileService) { }

  ngOnInit() {
    this.getReview();
  }

  getReview() {
    this.empReview.getReviews().subscribe(resp => {
      console.log(resp);
      this.reviews = resp;
    });
  }

}
