import { User } from "src/app/backOffice/userManagement/model/User";



export class subscription {
  id!: number;
  user!: User;
  status!: string ;
  subscriptionPrice!: number;
  tripStops!: number;
  remainingTrips!: number;
  subscriptionPaymentMethod!: string;
  qrCodeData!: string;
  qrCodeImageUrl?: string;

  // Ajoutez cette propriété
}
