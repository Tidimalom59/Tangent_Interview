import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class HttpService {
    private Base_Url = 'http://staging.tangent.tngnt.co/api';
    private
    constructor(private http: HttpClient) {}
}
