import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpService } from '../_services/http.service';
import { User } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();

  email = '{{user.username}}';
  password = '{{user.password}}';

  // Inject AuthService
  constructor(private auth: HttpService, private router: Router, private userlog: UserService) { }

  // Test GetData and Update to use Login method from the service
  onLogin() {
    // tslint:disable-next-line:prefer-const


    this.auth.loginPost(this.user).then((user) => {
      console.log(user.json());
    })
      .catch((err) => {
        console.log(err);
      });
  }

  onLoggedin() {
    this.auth.login(
      this.email,
      this.password
    ).subscribe(
      r => {
        if (r.token) {
          this.userlog.setToken(r.token);
          this.router.navigateByUrl('/dashboard');
        }
      },
      r => {
        alert(r.error.error);
      }
    );
    // localStorage.setItem('isLoggedin', 'true');
  }

}
