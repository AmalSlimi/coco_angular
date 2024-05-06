import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../MarketPlace/MarketPlaceService/product.service';
import { Product } from '../../MarketPlace/product';
import {FavoriteproductService} from "../../MarketPlace/MarketPlaceService/favoriteproduct.service";
import {UserService} from "../../MarketPlace/MarketPlaceService/user.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";
import {Pictureproduct} from "../../MarketPlace/pictureproduct";
import {Observable} from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import {AuthService} from "../../backOffice/userManagement/service/auth.service";
import {FavoriteProduct} from "../../MarketPlace/favoriteproduct";


@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']

})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    image:Pictureproduct[] = [];
    searchText: string = '';
    minPrice: number | undefined;
    maxPrice: number | undefined;
    selectedType: string | undefined;
    idProduct!:number;
    productId!:any;
  isProductInFavorites: boolean = false;
  notificationMessage: string | null = null;
  p:number = 1;
  itemsPerPage:number=8;
  totalProduct:any;
    showDetails: { [key: number]: boolean } = {};


    toggleDetails(idProduct: number) {
        this.showDetails[idProduct] = !this.showDetails[idProduct];
    }
    constructor(private productService: ProductService, private favoriteProductService: FavoriteproductService,private router:Router , private toast : NgToastService,    private snackBar: MatSnackBar  ,private authorService : AuthService
    ) { }

    ngOnInit() {
        this.loadProducts();

    }

    loadProducts() {
        this.productService.getAllProduct().subscribe((response: Product[]) => {
            this.products = response;
            this.applyFilters();
            this.totalProduct = response.length;
            this.checkIfProductIsInFavorites(this.idProduct);

        });
    }

    applyFilters() {
        this.filteredProducts = this.products.filter(product =>
            (this.selectedType ? product.typeProduct === this.selectedType : true) &&
            (this.searchText ? product.name.toLowerCase().includes(this.searchText.toLowerCase()) : true) &&
            (this.minPrice ? product.price >= this.minPrice : true) &&
            (this.maxPrice ? product.price <= this.maxPrice : true)
        );

    }
  getProductImageUrl(idProduct: number): Observable<string> {
    // Call your ProductService to get the image URL for the product
    // Assuming you have a method to get image URL in your ProductService
    return this.productService.getImageUrlForProduct(idProduct);
  }

    sortProductsByPriceAsc() {
        this.productService.getAllProductsSortedByPriceAsc().subscribe(
            (response: Product[]) => {
                this.products = response;
                this.applyFilters();
                console.log('Products sorted successfully.');
            },
            (error) => {
                console.error('Error sorting products:', error);
            }
        );
    }
    sortProductsByPriceDesc() {
        this.productService.getProductsSortedByPriceDesc().subscribe(
            (response: Product[]) => {
                this.products = response;
                this.applyFilters();
                console.log('Products sorted in descending order successfully.');
            },
            (error) => {
                console.error('Error sorting products in descending order:', error);
            }
        );
    }

    addToFavorites(idProduct: number) {
        if (idProduct) {
            this.favoriteProductService.getMyFavorites().subscribe((favoriteProduct: FavoriteProduct) => {
                if (favoriteProduct.idProducts.includes(idProduct)) {
                    console.log('Product is already in favorites.');
                    alert('Le produit existe déjà dans la liste de favoris.');
                    this.toast.error({detail:"Failure Message",summary:"Product is already in your Favorite List",duration:20000});
                    return;
                }

                console.log('Adding product to favorites:', idProduct);
                this.favoriteProductService.addToFavorites(idProduct).subscribe(
                    () => {
                        console.log('Product added to favorites successfully.');
                        alert('Votre produit a été ajouté à votre liste de favoris.');
                        this.toast.success({detail:"Success Message",summary:"Product is in your Favorite List",duration:20000});
                    },
                    (error: any) => {
                        console.error('Error adding product to favorites:', error);
                    }
                );
            });
        } else {
            console.error('Invalid idProduct:', idProduct);
        }
    }


    removeFromFavorites(idProduct: number) {
        this.favoriteProductService.removeFromFavorites(idProduct).subscribe(
            () => {
                console.log('Product removed from favorites successfully.');
                // Optionnel : Mettre à jour la liste de produits favoris après la suppression
                this.loadProducts();
            },
            (error: any) => {
                console.error('Error removing product from favorites:', error);
            }
        );
    }
  checkIfProductIsInFavorites(idProduct: number) {
    this.favoriteProductService.isProductInFavorites(idProduct).subscribe(
      (result: boolean) => {
        this.isProductInFavorites = result;
      },
      (error) => {
        console.error('Error checking if product is in favorites:', error);
      }
    );
  }
    /*addtoCart(productId: any) {
        this.productService.addToCart(productId).subscribe(
            res => {
                this.snackBar.open('Product added to cart successfully', 'Close', { duration: 5000 });
            },
            err => {
                console.error('Error when adding to cart:', err);
            }
        );
    }*/
    addtoCart(productId: any)
    { this.productService.addToCart(productId).subscribe( res => { this.snackBar.open('Product added to cart successfully', 'Close', { duration: 5000 }); }, err => { console.error('Error when adding to cart:', err); } );
        this.snackBar.open('Product added to cart successfully', 'Close', { duration: 5000 }); }

}
