import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusComponent } from '../bus/bus.component';
import { bus } from '../model/bus';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {
  private baseUrl : string =  'http://localhost:8085/spring2024/Bus/';

  constructor(private http:HttpClient) { }
  getAllBus(){
    return this.http.get<bus[]>(this.baseUrl + 'get-all');
  }
  addBus(b:bus){
    return this.http.post(this.baseUrl + 'add', b);
  }

  removeBus(id:number){
    return this.http.delete(this.baseUrl + 'remove' +'/'+id)
  }
}
