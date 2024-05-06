import { Product } from './product';
import { User } from './user';
import { OrderProduct } from './OrderProduct';

export class CartItems {
    idItems!: number;
    price!: number;
    quantity!: number;
    product!: Product;
    user!: User;
    orderProduct!: OrderProduct;
}
