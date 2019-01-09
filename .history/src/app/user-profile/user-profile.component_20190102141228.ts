import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public employee1: any;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profile.getProfiles().subscribe(resp => {
      console.log(resp);
      this.employee1 = resp;
    });
  }

}
