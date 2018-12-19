import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Inject AuthService
  public users: any;
  constructor(private: user: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.user.getUsers().subscribe(resp => {
      console.log(resp);
      this.users = resp;
    });
  }

}
