import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubCategoryProduct} from "../subcategory-product";
import {Observable} from "rxjs";
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(product: Product){
    return this.http.post( 'http://localhost:8085/spring2024/AddProduct' ,product);
  }

updateProduct(product: Product, idProduct: number): Observable<any> {
    return this.http.put('http://localhost:8085/spring2024/Product/' + idProduct, product);
  }

getAllProducts():Observable<any>{
    return this.http.get('http://localhost:8085/spring2024/Product');
  }
getProductById(idProduct:number):Observable<any>{
    return this.http.get( 'http://localhost:8085/spring2024/Productget/'+ idProduct );
  }
deleteProduct(idProduct:number){
    return this.http.delete('http://localhost:8085/spring2024/Productdelete/' + idProduct);
  }
}
