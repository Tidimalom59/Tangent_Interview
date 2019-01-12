import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Employee } from '../models/employee';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    public BASE_URL = 'http://staging.tangent.tngnt.co/api/';
    public httpheaders: HttpHeaders = new HttpHeaders({ 'Authorization': 'Token 2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678' });

    get<T>(route: string): Observable<T> {
        return this.http.get<T>(this.BASE_URL + route, {headers: this.httpheaders});
    }

    post<T, R>(model: R, route: string): Observable<T> {
        return this.http.post<T>(
            this.BASE_URL + route, model, {headers: this.httpheaders});
    }

    put<T>( route: string): Observable<T> {
        return this.http.put<T>
        (this.BASE_URL, route, {headers: this.httpheaders});
    }

    updateUser(employee: Employee) {
        return this.http.put(this.BASE_URL + '/' + employee.User.id, employee);
      }

    delete<T>() {

    }



}
