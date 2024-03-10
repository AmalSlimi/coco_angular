import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSService {
  private baseUrl:string = 'http://localhost:8085/spring2024/';

  constructor(private http:HttpClient) { }

  
  getAllUsers(): Observable<any> {
    // Assuming you store the JWT token in localStorage after login
    const token = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };

    return this.http.get<any>(`${this.baseUrl}users`, httpOptions);
  }


  deleteUser(id: number): Observable<any> {
    // Assuming you store the JWT token in localStorage after login
    const token = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
  
    return this.http.delete(`${this.baseUrl}users/${id}`, httpOptions);
  }
}
