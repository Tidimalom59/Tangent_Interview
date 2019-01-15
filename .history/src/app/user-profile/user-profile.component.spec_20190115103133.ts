import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { UserProfileComponent } from './user-profile.component';
import { EmployeeService } from '../_services/employee.service';
import { of } from 'rxjs';

let userObj;

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
    userObj = TestBed.get(EmployeeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call get function and return user object', inject([EmployeeService], (service: EmployeeService) => {

    const value = of([]);
    const getSpy = spyOn(userObj, 'getEmployees').and.returnValue(value);
    const testResponse = service.getEmployees();

    expect(testResponse).toBe(value);
    expect(getSpy).toHaveBeenCalledWith();
  }));

});
