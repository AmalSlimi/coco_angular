// accommodation.models.ts

export class Accomodation {
  accommodationID!: number;
  address!: string;
  rent_price!: number;
  numberOfRoom!: number;
  rules!: string;
  localisation!: string;
  accommodationName!: string;
  rooms!: Room[];
  categoryID!: number;
  categoryTitle!: string;
}

export class Room {
  roomID!: number;
  roomType!: Type;
  rent!: number;
  amenities!: string;
  roomDetails!: string;
}

export enum Type {
  Simple = 'Simple',
  Double = 'Double',
  Twin = 'Twin'
}

// Interface utilisant les classes existantes
export interface AccommodationInterface {
  accommodationID: number;
  address: string;
  rent_price: number;
  numberOfRoom: number;
  rules: string;
  localisation: string;
  accommodationName: string;
  rooms: Room[];
  categoryID: number;
  categoryTitle: string;
}
