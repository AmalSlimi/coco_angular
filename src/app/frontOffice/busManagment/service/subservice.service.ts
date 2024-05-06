import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subscription } from '../model/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubserviceService {
  private baseUrl: string = 'http://localhost:8085/spring2024/subscriptions/';

  constructor(private http: HttpClient) { }

  addSubscription(subscription: subscription): Observable<any> {
    const url = `${this.baseUrl}add`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post<any>(url, subscription, { headers });
  }

  getAllSubscription(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any[]>(this.baseUrl + 'get-all', { headers });
  }

  updateSubscriptionStatus(subscriptionId: number, newStatus: string): Observable<subscription> {
    const url = `${this.baseUrl}${subscriptionId}/updateStatus/${newStatus}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put<subscription>(url, {}, { headers });
  }

  getDetailsub(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(this.baseUrl + 'get' , { headers });
  }

  updateremainingTrips(subscriptionId: number, newremainingTrips: number): Observable<subscription> {
    const url = `${this.baseUrl}${subscriptionId}/updateremainingTrips/${newremainingTrips}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.put<subscription>(url, {}, { headers });
  }

  removeSub(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete(this.baseUrl + 'remove' + '/' + id, { headers });
  }
}
