import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TripStop } from '../model/TripStop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripStopServiceService {


  private baseUrl : string =  'http://localhost:8085/spring2024/TripSTOP/';



  constructor(private http: HttpClient) { }

  getAllTripStop(): Observable<TripStop[]> {
    return this.http.get<TripStop[]>(this.baseUrl + 'get-all');
  }


  addTripStop(tripId: number, stopId: number, tripStop: TripStop): Observable<TripStop> {
    return this.http.post<TripStop>(`${this.baseUrl}${tripId}/${stopId}`, tripStop);
  }
  removetrip(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'remove/' + id);
  }

  updateTripStop(t: TripStop): Observable<TripStop> {
    return this.http.put<TripStop>(this.baseUrl + 'update', t);
  }

  getDetailtrip(id: number): Observable<TripStop> {
    return this.http.get<TripStop>(this.baseUrl + 'get/' + id);
  }
  gettripStopsbyTrip(id: number): Observable<TripStop[]> {
    return this.http.get<TripStop[]>(this.baseUrl + 'getbyidtrip/' + id);
  }
  getStopbyTripStop(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'getbyidtripstop/' + id);
  }
  tri(){
   return this.http.get<TripStop[]>(this.baseUrl + 'tri');

  }



}
