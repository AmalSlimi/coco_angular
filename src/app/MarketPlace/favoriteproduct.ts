import { User } from './user';
import { Product } from './product';

export class FavoriteProduct {
  idfav: number;
  idUser!: number;
  idProducts!: number[];

  user: User;
  products: Product[];

  constructor(idfav: number, user: User, products: Product[]) {
    this.idfav = idfav;
    this.user = user;
    this.products = products;
  }
}
