import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../models';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Form validation
  isLoginError = false;
  // Login Loader
  loading = false;

  // Declare user oject
  user: User = new User();

  // Inject AuthService, and Router
  constructor(private auth: UserService, private router: Router) { }
  ngOnInit() {
    this.auth.logout();
  }

  onLogin() {
    this.loading = true;
    this.auth.login(this.user)
    .pipe(first())
     .subscribe(result => {
       if (result && result.token) {
        localStorage.setItem('currentUser', result.token);
        this.router.navigate(['dashboard']);

       } else {
          console.log('something went wrong');
       }
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
      this.loading = false;
    });
  }
}
