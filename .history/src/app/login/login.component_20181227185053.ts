import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  // tslint:disable-next-line:no-inferrable-types
  private tokenKey: string = 'app_token';

    private store(content: Object) {
        localStorage.setItem(this.tokenKey, JSON.stringify(content));
    }

  // Inject AuthService
  constructor(private auth: UserService) { }
  ngOnInit() {
  }

  // login2() {
  //   this.auth.login(this.user)
  //     .subscribe(result => {
  //       console.log(result);
  //     });
  // }

  onLogin(): void {
    this.auth.login(this.user)
     .subscribe(result => {
        console.log(result);
    });
  }
}
