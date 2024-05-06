import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../product";
import {Observable} from "rxjs";
import {FavoriteProduct} from "../favoriteproduct";

@Injectable({
  providedIn: 'root'
})
export class FavoriteproductService {


  constructor(private http:HttpClient) { }
 /* addToFavorites(idProduct: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8085/spring2024/addFavProd?idProduct=${idProduct}`, {});
  }*/

  addToFavorites(idProduct: number): Observable<string> {
    const productDto = { idProduct: idProduct };
    return this.http.post('http://localhost:8085/spring2024/addFavProd', productDto, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
      responseType: 'text'
    });
  }
  getUserById(id: number): Observable<any>{
    return this.http.get<any>('http://localhost:8085/spring2024/getuserid/'+id);
  }
  getMyFavorites(): Observable<FavoriteProduct> {
    return this.http.get<FavoriteProduct>(`http://localhost:8085/spring2024/myfavorites`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })
    });
  }




  isProductInFavorites(idProduct:number):Observable<boolean>{
    return this.http.get<boolean>('http://localhost:8085/spring2024/FavProd/check?idProduct=${idProduct}');
  }
  getUserFavorites(id:number):Observable<Product[]>{
    return this.http.get<Product[]>( 'http://localhost:8085/spring2024/getfav/'+ id);
  }
  /*removeFromFavorites(idProduct: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8085/spring2024/removeFavProd?idProduct=${idProduct}`, {});
  }*/

  removeFromFavorites(productId: number): Observable<any> {
    return this.http.delete(`http://localhost:8085/spring2024/removeFavProd/${productId}`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
      responseType: 'text'
    });
  }


}
