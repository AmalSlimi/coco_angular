import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from './model/Reclamation';
import { AuthService } from 'src/app/backOffice/userManagement/service/auth.service';
import { Response } from './model/Response';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:8085/spring2024';

  constructor(private http: HttpClient) {}

  

  addReclamation(reclamation: Reclamation): Observable<string> {
    return this.http.post(`${this.apiUrl}/reclamations/add?rideId=1`, reclamation, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
      responseType: 'text'  
    });
  }
  
  getMyReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/reclamations/my-reclamations`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })
    });
  }

  getReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/reclamations/all`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }

  updateReclamation(reclamation: Reclamation): Observable<any> {
    return this.http.put(`${this.apiUrl}/reclamations/${reclamation.id}`, reclamation, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }

  getReclamationById(reclamationId: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/reclamations/${reclamationId}`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }
  
  deleteReclamation(reclamationId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reclamations/${reclamationId}`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
      responseType: 'text'
    });
  }

  updateReclamationState(reclamationId: number, state: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/reclamations/${reclamationId}/state?state=${state}`, {});
  }

  sendResponse(reclamationId: number, response: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/responses/add/${reclamationId}`, response, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    });
  }
  
  getAllResponses(): Observable<Response[]> {
    return this.http.get<Response[]>(`${this.apiUrl}/responses/all`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }

  deleteResponse(responseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/responses/${responseId}`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
      responseType: 'text'
    });
  }

  getResponsesByReclamation(reclamationId: number): Observable<Response[]> {
    return this.http.get<Response[]>(`${this.apiUrl}/responses/by-reclamation/${reclamationId}`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }
  

}
