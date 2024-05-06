import { Sold } from 'src/app/frontOffice/accommodationModule/models/Sold';
import { Role } from './Role';
export class User {
    id!: number;
    email!: string;
    password!: string;
    username!: string;
    gender!: string;
    address!: string;
    dateOfBirth!: Date; 
    pictureUrl!: string;
    phoneNumber!: string;
    role!: Role[];  
    solds!:Sold['accountSold'];
}