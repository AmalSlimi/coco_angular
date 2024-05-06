import { Component } from '@angular/core';
import {ProductService} from "../MarketPlaceService/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
cartItems: any[] = [];
order:any;
constructor(private productService : ProductService , private snackbar : MatSnackBar,private fb:FormBuilder,public dialog:MatDialog) {

}
ngOnInit(){
  this.getCart()
}
getCart(){
  this.cartItems=[];
  this.productService.getCartByUser().subscribe(res =>{
    this.order = res;
    res.cartItems.forEach((element:any) => {
      this.cartItems.push(element);
    })
  })
}
}
