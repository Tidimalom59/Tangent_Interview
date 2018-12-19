import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Inject AuthService
  public users: any;

  constructor(private: user: HttpService) { }

  ngOnInit() {
    this.getUsers();
  }

  getEmployee() {
    this.user.getUsers().subscribe(resp => {
      console.log(resp);
      this.user = resp;
    });
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }

}
