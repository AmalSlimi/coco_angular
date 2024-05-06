import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ticket } from '../model/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl: string = 'http://localhost:8085/spring2024/ticket/';

  constructor(private http: HttpClient) { }

  addTicket(tripStopId: number): Observable<any> {
    const url = `${this.baseUrl}add`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post<any>(url, tripStopId, { headers });
  }

  getAllTicket(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any[]>(this.baseUrl + 'get-all', { headers });
  }

  getDetailticket(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(this.baseUrl + 'get/' + id, { headers });
  }

  removeTicket(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete(this.baseUrl + 'remove' + '/' + id, { headers });
  }

  updateTicketStatus(ticketId: number, newStatus: string): Observable<ticket> {
    const url = `${this.baseUrl}${ticketId}/updateStatus/${newStatus}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put<ticket>(url, {}, { headers });
  }
}
