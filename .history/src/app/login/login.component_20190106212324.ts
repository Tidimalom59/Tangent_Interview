import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../models';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  // Form Validation Variables
  loginForm: FormGroup;
  submitted = false;

  // Inject AuthService
  constructor(private auth: UserService, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.auth.logout();

    // Login Validation
    this.loginForm = this.formBuilder.group({
      'username': [this.user.Username, '', Validators.required],
      'password': [this.user.Password, '', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onLogin() {
    this.auth.login(this.user)
    .pipe(first())
     .subscribe(result => {
       if (result && result.token) {
        localStorage.setItem('currentUser', result.token);
        this.router.navigate(['/dashboard']);

       } else {
          console.log('something went wrong');
       }
    });

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
  }
}