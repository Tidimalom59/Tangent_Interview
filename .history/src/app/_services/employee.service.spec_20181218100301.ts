/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

let httpClient;
describe('Service: Employee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService, HttpService],
      imports: [HttpClientModule]
    });
    httpClient = TestBed.get(HttpClient);
  });

  it('should call get function and return employees', inject([HttpService], (service: HttpService) => {
  const value = of({});
  const route = 'route';
  const getSpy = spyOn(httpClient, 'get').and.returnValue(value);
  const testResponse = service.get(route);
  expect(testResponse).toBe(value);
  expect(getSpy).toHaveBeenCalledWith(service.Base_Url + route);
  }));
});
