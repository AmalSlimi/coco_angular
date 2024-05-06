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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getAllUsers(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };

    return this.http.get<any>(`${this.baseUrl}admin/users`, httpOptions);
  }


  deleteUser(id: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
  
    return this.http.delete(`${this.baseUrl}users/${id}`, httpOptions);
  }

  getMyProfile(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
  
    return this.http.get<User>(`${this.baseUrl}user/profile`, httpOptions); 
  }
  
  updateProfile(profileData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}user/profile`, profileData);
  }
  
  
  
  
  
  changePassword(changePasswordRequest: {email: string, oldPassword: string, newPassword: string}): Observable<any> {
    const url = `${this.baseUrl}user/change-password`;
    return this.http.post(url, changePasswordRequest, this.httpOptions);
}

searchUsers(searchTerm: string): Observable<any> {
  const url = `${this.baseUrl}admin/search?searchTerm=${encodeURIComponent(searchTerm)}`;
  return this.http.get<any>(url, this.httpOptions);
}

updateRole(roleName: string): Observable<any> {
  return this.http.post(`${this.baseUrl}user/updateRole`, { role: roleName });
}

}
