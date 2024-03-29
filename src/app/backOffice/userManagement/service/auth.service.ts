import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'http://localhost:8085/spring2024/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}auth/login`, { email, password }, this.httpOptions)
      .pipe(tap(res => {
        if (res && res.accessToken) { // Assuming the token is named 'accessToken' in the response
          localStorage.setItem('token', res.accessToken); // Use 'token' as the key
          console.log('Token stored');
        }
      }));
    
  }
  

  register(user: any): Observable<any> {
    console.log("Sending registration data: ", user); // Debug log
    return this.http.post<any>(`${this.baseUrl}auth/signup`, user, this.httpOptions);
  }
  

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token'); 
    return !!token; 
  }

  logout(): void {
    localStorage.removeItem('token'); 
  }
  

  
}
