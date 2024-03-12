import { HttpClient } from '@angular/common/http';
import { Injectable, getPlatform } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/backOffice/model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private baseUrl: string ='http://localhost:8085/spring2024/collocation';

  constructor(private http:HttpClient) { }

  getll():Observable<any> {
    return this.http.get('http://localhost:8085/spring2024/collocation/allCategory')
  }

 
//   deletCat(id:number) {
//     return this.http.delete('http://localhost:8085/spring2024/collocation/deleteCategory/'+ id)
// }



// // AddCategoru(){
// //         return this.http.post(Category: Category);
// //     }



}
