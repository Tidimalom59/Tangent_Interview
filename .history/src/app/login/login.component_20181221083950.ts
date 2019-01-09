import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpService } from '../_services/http.service';
import { User } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  // Inject AuthService
  constructor(private auth: UserService) { }
  ngOnInit(): void {

    // tslint:disable-next-line:prefer-const
    // let sampleUser: any = {
    //   email: 'pravin.gordhan' as string,
    //   password: 'pravin.gordhan' as string
    // };

    // this.auth.login(sampleUser).then((user) => {
    //   console.log(user.json());
    // })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    this.login2();
  }

  login2() {
    this.auth.login(this.user)
      .subscribe(result => {
        console.log(result);
      });
  }
}
