import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(data: any) {
    return this.http.post(environment.apiUrl + '/login', data)
    .pipe(map(data => this.setUser(data)));
  }

  register(data: any) {
    return this.http.post(environment.apiUrl + '/register', data)
    .pipe(map(data => this.setUser(data)));
  }

  setUser(data: any) {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    if (data.token) {
      const token = data.token.split('|')[1];
      localStorage.setItem('token', token);
    }

    return data;
  }

  get isLoggedIn() {
    return !! localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

}
