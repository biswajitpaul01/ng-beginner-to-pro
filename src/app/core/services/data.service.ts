import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll(extraUrl = '', params = {}) {
    return this.http.get(this.url + '/' + extraUrl, {
      params: params
    }).pipe(retry(1), catchError(error => {
      return throwError(error);
    }))
  }

  getOne(extraUrl = '', params = {}) {
    return this.http.get(this.url + '/' + extraUrl, {
      params: params
    }).pipe(retry(1), catchError(error => {
      return throwError(error);
    }))
  }

  post(data: any) {
    return this.http.post(this.url, data).pipe(retry(1), catchError(error => {
      return throwError(error);
    }))
  }

}
