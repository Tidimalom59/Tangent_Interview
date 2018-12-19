import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpService } from '../_services/http.service';

describe('LoginComponent', () => {
  // tslint:disable-next-line:prefer-const
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        RouterModule
      ],
      providers: [
        HttpService
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  it('should create', async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

