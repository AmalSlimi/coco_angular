
import { TripStop } from "src/app/backOffice/busModule/model/TripStop";
import { User } from "src/app/backOffice/userManagement/model/User";

export class ticket {
  id!: number;
  validityDate!: Date ;
  status!: string;
  paymentMethod!: string;
  tripstop!: TripStop;
  price!: number;
  user!: User;


}
