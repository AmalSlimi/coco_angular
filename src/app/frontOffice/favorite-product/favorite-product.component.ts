import {Component, OnInit} from '@angular/core';
import {Product} from "../../MarketPlace/product";
import {FavoriteproductService} from "../../MarketPlace/MarketPlaceService/favoriteproduct.service";

import {Router} from "@angular/router";
import {FavoriteProduct} from "../../MarketPlace/favoriteproduct";
import {ProductService} from "../../MarketPlace/MarketPlaceService/product.service";
@Component({
  selector: 'app-favorite-product',
  templateUrl: './favoriteproduct.component.html',
  styleUrls: ['./favoriteproduct.component.scss']
})
export class FavoriteProductComponent implements OnInit{
  myFavoriteProducts: FavoriteProduct[] = [];
  error: string | null = null;

  constructor(private favoriteProductService: FavoriteproductService,private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    //const id= 1;
    this.loadFavoriteProducts();

  }

  loadFavoriteProducts(): void {
    this.productService.getAllProduct().subscribe((allProducts: Product[]) => {
      this.favoriteProductService.getMyFavorites().subscribe({
        next: (favoriteProduct: FavoriteProduct) => {
          console.log(favoriteProduct); // Add this line
          this.myFavoriteProducts = [{
            ...favoriteProduct,
            products: favoriteProduct.idProducts.map((idProduct: number) => {
              return allProducts.find((product: Product) => product.idProduct === idProduct);
            }).filter((product: Product | undefined): product is Product => product !== undefined)
          }];
        },
        error: (err) => {
          this.error = 'Failed to load favorite products';
          console.error(err);
        }
      });
    });
  }
  deleteProduct(idProduct: number) {
    // Afficher une alerte de confirmation
    const confirmation = confirm('Voulez-vous vraiment supprimer ce produit ?');

    // Vérifier si l'utilisateur a confirmé la suppression
    if (confirmation) {
      // Supprimer le produit des favoris
      this.favoriteProductService.removeFromFavorites(idProduct).subscribe(
          () => {
            // Recharger la liste de favoris après la suppression
            this.loadFavoriteProducts(); // Ou utilisez l'ID de l'utilisateur approprié
            console.log('Produit supprimé des favoris avec succès.');
          },
          (error) => {
            console.error('Erreur lors de la suppression du produit des favoris :', error);
          }
      );
    }
  }


}
