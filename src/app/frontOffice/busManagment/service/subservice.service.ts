import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { subscription } from '../model/subscription';



@Injectable({
  providedIn: 'root'
})
export class SubserviceService {
  private baseUrl : string =  'http://localhost:8085/spring2024/subscriptions/';

  constructor(private http:HttpClient) { }
  addSubscription(userId: number, subscription: subscription): Observable<any> {
    const url = `${this.baseUrl}${userId}/add`;
    return this.http.post<any>(url, subscription);
  }
  getAllSubscription(){
    return this.http.get<any[]>(this.baseUrl + 'get-all');
  }




}
