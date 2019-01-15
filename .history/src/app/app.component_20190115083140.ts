import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading;

  constructor(
    private router: Router
  ) {
   this.loading = true;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.router.events
        .subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.loading = true;
            } else if (
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel
                ) {
                this.loading = false;
            }
        });
}

}
