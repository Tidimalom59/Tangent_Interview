import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { UserProfileComponent } from './user-profile.component';
import { EmployeeService } from '../_services/employee.service';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});
