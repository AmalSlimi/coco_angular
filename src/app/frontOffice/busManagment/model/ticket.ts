
import { TripStop } from "src/app/backOffice/busModule/model/TripStop";
import { User } from "src/app/backOffice/userManagement/model/User";

export class ticket {
  id!: number;
  validityDate!: Date ;
  status!: string;
  paymentMethod!: string;
  price!: number;

  tripstop!: TripStop;
  user!: User;

  qrCodeData2!: string;
  qrCodeImageUrl2?: string;




}
