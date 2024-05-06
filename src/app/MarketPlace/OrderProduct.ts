import { User } from './user';
import { CartItems } from './CartItems';

export enum OrderStatus {
    Pending,
    Placed,
    Shipped,
    Delivered // Define your order statuses here
}

export class OrderProduct {
    idOrderProduct!: number;
    orderDescription!: string;
    date!: Date;
    amount!: number;
    address!: string;
    payment!: string;
    orderStatus!: OrderStatus;
    totalAmount!: number;
    discount!: number;
    trackingId!: string;
    user!: User;
    cartItems!: CartItems[];
}
