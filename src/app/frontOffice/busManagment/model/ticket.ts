
import { TripStop } from "src/app/backOffice/busModule/model/TripStop";
import { stop } from "src/app/backOffice/busModule/model/stop";
import { trip } from "src/app/backOffice/busModule/model/trip";
import { User } from "src/app/backOffice/userManagement/model/User";

export class ticket {
  id!: number;
  validityDate!: Date ;
  status!: string;
  paymentMethod!: string;
  price!: number;
  qrCodeData2!: string;
  qrCodeImageUrl2?: string;
  tripstop!: TripStop;
  user!: User;
  



}
