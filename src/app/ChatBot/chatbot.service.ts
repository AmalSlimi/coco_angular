import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'http://127.0.0.1:5000/'; 

  constructor(private http: HttpClient) { }

  sendMessage(userInput: string): Observable<any> {
    return this.http.post<{message: string}>(this.apiUrl, { text: userInput });
  }
}
