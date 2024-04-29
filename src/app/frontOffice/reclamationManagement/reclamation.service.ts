import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from './model/Reclamation';
import { AuthService } from 'src/app/backOffice/userManagement/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:8085/spring2024/reclamations';

  constructor(private http: HttpClient) {}

  

  addReclamation(reclamation: Reclamation): Observable<string> {
    return this.http.post(`${this.apiUrl}/add?rideId=1`, reclamation, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
      responseType: 'text'  
    });
  }
  
  getMyReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/my-reclamations`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })
    });
  }

  getReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/all`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }

  updateReclamation(reclamation: Reclamation): Observable<any> {
    return this.http.put(`${this.apiUrl}/${reclamation.id}`, reclamation, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }


}
