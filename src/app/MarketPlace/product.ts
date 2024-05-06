import {Pictureproduct} from "../MarketPlace/pictureproduct";

enum TypeProduct {
  LENT = 'LENT',
  SELL = 'SELL'
}


export class Product {
  idProduct!:number
  name!:string
  description!:string
  quantity!:number
  weight!:string
  price!:number
  imageName?:string;
  imageUrl?:string
  imageId?:string;
  //userId?: number;
  typeProduct!: TypeProduct
  pictureProducts: Pictureproduct[] = [];
  getTypeAsString(): string {
    return TypeProduct[this.typeProduct];
  }

}
