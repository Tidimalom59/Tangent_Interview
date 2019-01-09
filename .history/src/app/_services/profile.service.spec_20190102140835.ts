/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

let httpClient;
describe('Service: Profile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService, HttpService],
      imports: [HttpClientModule]
    });
    httpClient = TestBed.get(HttpClient);
  });

  it('should call get function and return profiles', inject([HttpService], (service: HttpService) => {
  const value = of({});
  const route = 'route';
  const getSpy = spyOn(httpClient, 'get').and.returnValue(value);
  const testResponse = service.get;
  expect(testResponse).toBe(value);
  expect(getSpy).toHaveBeenCalledWith(service.BASE_URL + route);
  }));
});
