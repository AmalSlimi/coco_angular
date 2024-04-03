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
  typeProduct!: TypeProduct
  getTypeAsString(): string {
    return TypeProduct[this.typeProduct];
  }

}
