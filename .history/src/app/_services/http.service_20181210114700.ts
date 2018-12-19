import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}

    baseUrl = 'http://staging.tangent.tngnt.co/api/';

    get<T> ( route: string ): Observable<T> {
        return this.http.get<T>(this.baseUrl + route);
    }

    post<T, R> (model: R, route: string): Observable<T> {
        return this.http.post<T>(this.baseUrl + route, model);
    }

    patch<T>(){

    }

    delete<T>(){
        
    }
}