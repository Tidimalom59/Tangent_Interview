/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

let httpClient;
describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, HttpService],
      imports: [HttpClientModule]
    });
    httpClient = TestBed.get(HttpClient);
  });

  it('should call post function and login user', inject([HttpService], (service: HttpService) => {
  const value = of({});
  const route = 'route';
  const authDetails = {
    'username':
    'password'
  };
  const getSpy = spyOn(httpClient, 'post').and.returnValue(value);
  const testResponse = service.get(route);
  expect(testResponse).toBe(value);
  expect(getSpy).toHaveBeenCalledWith(service.BASE_URL + route, authDetails, { headers: this.httpheaders });
  }));
});