import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from '../user';
import { Sold } from 'src/app/frontOffice/accommodationModule/models/Sold';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUserById(id:number):Observable<any>{
    return this.http.get( 'http://localhost:8085/spring2024/getuserid/'+ id );
  }




}


