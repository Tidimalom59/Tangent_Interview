import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { EmployeeService } from '../_services/employee.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

let employeeObj;

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [ EmployeeService ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
    employeeObj = TestBed.get(EmployeeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call get function and return employee object', inject([EmployeeService], (service: EmployeeService) => {

    const value = of([]);
    const getSpy = spyOn(employeeObj, 'getEmployees').and.returnValue(value);
    const testResponse = service.getEmployees();

    expect(testResponse).toBe(value);
    expect(getSpy).toHaveBeenCalledWith();
  }));
});
