import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SubCategoryProduct} from "../subcategory-product";
import {Observable, throwError} from "rxjs";
import {Product} from "../product";
import {catchError} from "rxjs/operators";
import {UserService} from "./user.service";
import {UserSService} from "../../backOffice/userManagement/service/user-s.service";
import {AuthService} from "../../backOffice/userManagement/service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8085/spring2024';

  constructor(private http:HttpClient, private userService:UserService,private users:UserSService,private auth:AuthService) { }
  addProduct(product: Product){
    return this.http.post( 'http://localhost:8085/spring2024/AddProduct' ,product);
  }


//http://localhost:8085/spring2024/Addproducts
  addProduit(product:Product): Observable<string> {
    return this.http.post(`http://localhost:8085/spring2024/Addproducts`, product, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
      responseType: 'text'
    });
  }

//zyda
updateProduct(product: Product, idProduct: number): Observable<any> {
    return this.http.put('http://localhost:8085/spring2024/Product/' + idProduct, product);
  }

  updateProducts(idProduct: number, productDto: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8085/spring2024/UpdateProduct/${idProduct}`, productDto, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }




  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8085/spring2024/allProducts`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }
    getMyProducts(): Observable<any> {
        return this.http.get<any>(`http://localhost:8085/spring2024/myProducts`, {
            headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
        });
    }

  getProductDtoById(idProduct: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8085/spring2024/ProductDto/${idProduct}`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }

  getProductById(idProduct:number):Observable<any>{
    return this.http.get( 'http://localhost:8085/spring2024/Productget/'+ idProduct );
  }
deleteProduct(idProduct:number){
    return this.http.delete('http://localhost:8085/spring2024/Productdelete/' + idProduct);
  }
  getAllProductsSortedByPriceAsc():Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:8085/spring2024/ProductsortedByPriceAsc`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }
  getProductsSortedByPriceDesc():Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:8085/spring2024/ProdSortedByPriceDesc`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` })
    });
  }
    assignProductToSubcategory(idProduct: number, idSubCategory: number): Observable<any> {
        return this.http.put<any>(`http://localhost:8085/spring2024/${idProduct}/subcategory/${idSubCategory}`, null);
    }
  assignPictureToProduct(idProduct: number, idpicture: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8085/spring2024/assignPictureToProduct?idProduct=${idProduct}&idpicture=${idpicture}`, {});
  }
    getLastProductId(): Observable<number> {
        return this.http.get<number>('http://localhost:8085/spring2024/last-id/product');
    }
 /* getImageUrlForProduct(idProduct: number): Observable<string> {
    return this.http.get<string>(`http://localhost:8085/spring2024/${idProduct}/image-url`);
  }*/
  getImageUrlForProduct(idProduct: number): Observable<string> {
    return this.http.get<string>(`http://localhost:8085/spring2024/imageurl/`+ idProduct)
      .pipe(
        catchError(error => {
          console.error('Error fetching image URL:', error);
          return throwError('Error fetching image URL. Please try again.');
        })
      );
  }
  CreateAuthorizationHeader() {
    const token = this.auth.getToken();
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token ? token : ''}`
    };
  }

  addToCart(productId: any): Observable<any> {
    const body = { productId: productId }; // Modify this line to match the structure of AddProductInCartDto
    return this.http.post(`http://localhost:8085/spring2024/addOrderAndProductToCart2`, body, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
      responseType: 'text'
    });
  }
  getCartByUser(): Observable<any> {
    return this.http.get<any>(`http://localhost:8085/spring2024/mycart`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      })
    });
  }


//https://www.w3schools.com/icons/fontawesome_icons_intro.asp
}
