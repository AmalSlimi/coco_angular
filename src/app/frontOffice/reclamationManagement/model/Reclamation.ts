import { ReclamationType } from "./ReclamationType";
import { Response } from "./Response";
export class Reclamation {
    id!: number;
  title!: string;
  description!: string;
  type!: ReclamationType;  
  date!: Date | string;  
  state!: string;  
  userId?: number;  
  rideId?: number;
  responses?: Response[];    
}