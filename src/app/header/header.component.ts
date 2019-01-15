import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userlogged: any;

  leaves: any;

  constructor(public router: Router, private user: ProfileService, private leave: ProfileService) {  }

  ngOnInit() {
    this.getUser();
    this.getReview();
  }

  getUser() {
    this.user.getUsers().subscribe(resp => {
      console.log(resp);
      this.userlogged = resp;
    });
  }

  getReview() {
    this.leave.getLeaves().subscribe(resp => {
      console.log(resp);
      this.leaves = resp;
    });
  }

  logout() {
    localStorage.removeItem('isLoggedin');
  }

}
