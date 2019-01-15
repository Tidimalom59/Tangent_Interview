import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { Review } from '../models/review';
import { Leave } from '../models/leave';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  route = 'employee/me';
  routeReview = 'review';

  constructor(private httpService: HttpService) { }

  getProfiles(): Observable<Employee[]> {
    return this.httpService.get<Employee[]>(this.route);
  }

  getReviews(): Observable<Review[]> {
    return this.httpService.get<Review[]>(this.routeReview);
  }

  getUsers(): Observable<Employee[]> {
    return this.httpService.get<Employee[]>(this.route);
  }

  getLeaves(): Observable<Leave[]> {
    return this.httpService.get<Leave[]>(this.route);
  }

}
