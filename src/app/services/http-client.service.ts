import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class HttpClientService {
    constructor(
        private http: HttpClient
    ) { }

    public get<T>(url: string, optionParams?: { [param: string]: string | string[]}): Observable<T> {
        const params = new HttpParams({fromObject: optionParams});
        return this.http.get<T>(url, {params});
    }
}
