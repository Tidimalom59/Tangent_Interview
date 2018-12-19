import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Headers } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    baseUrl = 'http://staging.tangent.tngnt.co/api/';
    private headers: Headers = new Headers ({'Authorization': 'Token 2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678'});

    get<T> ( route: string ): Observable<T> {
        return this.http.get<T>(this.baseUrl + route);
    }

    post<T, R> (model: R, route: string): Observable<T> {
        return this.http.post<T>(this.baseUrl + route, model);
    }

    patch<T>() {

    }

    delete<T>() {
    }
}
