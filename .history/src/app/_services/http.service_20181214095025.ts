import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class HttpService {
    private Base_Url = 'http://staging.tangent.tngnt.co/api';
    private httpheaders: HttpHeaders = new HttpHeaders({ 'Authorization': 'Token 2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678' });

    constructor(private http: HttpClient) { }

    employeeGet(employee: Employee): Promise<any> {
        // tslint:disable-next-line:prefer-const
        let url = `${this.Base_Url}/employee`;
        return this.http.get(url, { headers: this.httpheaders }).toPromise();
    }
}
