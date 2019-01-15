import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public employee1: any;

  public reviews: any;

  users: Employee[];

  constructor(private profile: ProfileService, private review: ProfileService, private router: Router) { }

  ngOnInit() {
    this.getProfile();
    this.getReview();

    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.profile.getUsers()
      .subscribe( data => {
          this.users = data;
      });
  }

  getProfile() {
    this.profile.getProfiles().subscribe(resp => {
      console.log(resp);
      this.employee1 = resp;
    });
  }

  getReview() {
    this.review.getReviews().subscribe(resp => {
      console.log(resp);
      this.reviews = resp;
    });
  }

  editUser(user: Employee): void {
    window.localStorage.removeItem('currentUser');
    window.localStorage.setItem('currentUser', user.toString());
    this.router.navigate(['edit-profile']);
  }

}
