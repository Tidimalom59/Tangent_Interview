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

  constructor(public router: Router, private user: ProfileService) {  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.user.getUsers().subscribe(resp => {
      console.log(resp);
      this.userlogged = resp;
    });
  }

  logout() {
    localStorage.removeItem('isLoggedin');
  }

}
