import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const host = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${host}/auth/login`, {email: email, password: password});
  }
}
