import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUserById(id:number):Observable<any>{
    return this.http.get( 'http://localhost:8085/spring2024/getuserid/'+ id );
  }
}
