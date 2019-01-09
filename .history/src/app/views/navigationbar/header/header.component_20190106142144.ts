import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProfileService } from '../../../_services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userlogged: any;

  public pushRightClass: string;

  constructor(public router: Router, private user: ProfileService) {
    // this.router.events.subscribe(val => {
    //   if (
    //     val instanceof NavigationEnd &&
    //     window.innerWidth <= 992 &&
    //     this.isToggled()
    //   ) {
    //     this.toggleSidebar();
    //   }
    // });
  }

  ngOnInit() {
    this.getUser();
  }

  // isToggled(): boolean {
  //   const dom: Element = document.querySelector('body');
  //   return dom.classList.contains(this.pushRightClass);
  // }

  // toggleSidebar() {
  //   const dom: any = document.querySelector('body');
  //   dom.classList.toggle(this.pushRightClass);
  // }

  // onLoggedout() {
  //   localStorage.removeItem('isLoggedin');
  // }

}
