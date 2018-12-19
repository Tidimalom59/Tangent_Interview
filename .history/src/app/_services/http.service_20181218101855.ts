import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable()

export class HttpService {
    public Base_Url = 'http://staging.tangent.tngnt.co/api';
    public httpheaders: HttpHeaders = new HttpHeaders({ 'Authorization': 'Token 2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678' });

    constructor(private http: HttpClient) { }
    get(employee: Employee): Promise<any> {
        // tslint:disable-next-line:prefer-const
        let url = `${this.Base_Url}/employee`;
        return this.http.get(url, { headers: this.httpheaders }).toPromise();
    }
}
