import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpService } from '../_services/http.service';
import { User } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();

  // Inject AuthService
  constructor(private auth: HttpService) { }

  // Test GetData and Update to use Login method from the service
  onLogin(): void {
    // tslint:disable-next-line:prefer-const
    /*let sampleUser: any = {
      email: 'pravin.gordhan' as string,
      password: 'pravin.gordhan' as string
    };*/

    this.auth.loginPost(this.user).then((user) => {
      console.log(user.json());
    })
      .catch((err) => {
        console.log(err);
      });
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }

}
