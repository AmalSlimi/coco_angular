import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from 'src/app/backOffice/model/Room';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  private baseUrl = 'http://localhost:8085/spring2024/collocation';
  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get('http://localhost:8085/spring2024/collocation/allRoom')
  }

}
