import { Component } from '@angular/core';
import {SubCategoryProduct} from "../subcategory-product";
import {CategoryProductService} from "../MarketPlaceService/category-product.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Product} from "../product";
import {ProductService} from "../MarketPlaceService/product.service";


@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent {
  producties = new Product();
  showAlert = false;


  constructor(private productservice:ProductService,private http:HttpClient,private router: Router) {

  }

  ngOnInit() {
  }

  saveProduct() {
    /* this.rideService.createRide(this.ride).subscribe((response) => {
       console.log(response); });*/
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(this.producties);

    // Log the request body to the console for debugging
    console.log('Request body:', body);
    this.showAlert=true;
    this.http.post('http://localhost:8085/spring2024/AddProduct', body, { headers })
        .subscribe(
            response => {
              console.log('Success:', response);
              this.router.navigate(['/product-list']);
            });
  }
  closeAlert(){
    this.showAlert = false ;
  }

}
