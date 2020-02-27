import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClientService } from './http-client.service';
import { GroceriesResponse } from './../models/groceries-response.model';

@Injectable()

export class GroceriesService {
  private apiURL:string = '/mocks/groceries.json';

  constructor(
    private httpClient: HttpClientService,
  ) {}

  public getGroceries(): Observable<GroceriesResponse> {
    return this.httpClient.get<GroceriesResponse>(`${this.apiURL}`)
    .pipe(
      catchError(this.handleError<any>('getTransactions', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}