import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './views/navigationbar/header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './views/error-pages/not-found/not-found.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        RouterModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        EmployeeComponent,
        LoginComponent,
        HeaderComponent,
        UserProfileComponent,
        NotFoundComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'TangentInterview'`, inject([AppComponent], (service: AppComponent) => {
    const value = 'TangentInterview';
    const testResp = service.title;
    expect(testResp).toBe(value);
  }));

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to TangentInterview!');
  });
});
