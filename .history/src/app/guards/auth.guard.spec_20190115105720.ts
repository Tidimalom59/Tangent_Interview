import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpService } from '../_services/http.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard,
      { provide: Router, useClass: { navigate: () => null } },
    { provide: HttpService, useClass: {} }
  ]
    });
    guard = TestBed.get(AuthGuard);
  });

  it('should not be able to activate when logged out', () => {
    const httpService = TestBed.get(HttpService);
    httpService.isLoggedIn = false;
    const res = guard.canActivate(null, null);
    expect(res).toBeFalsy();
  });
  it('should be able to activate when logged in', () => {
    const httpService = TestBed.get(HttpService);
    httpService.isLoggedIn = true;
    const res = guard.canActivate(null, null);
    expect(res).toBeTruthy();
  });

  // it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
