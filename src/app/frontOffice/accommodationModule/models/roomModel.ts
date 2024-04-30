export class Room
{
  roomID !: number;
  roomType !: Type
  rent !: number
  amenities!: string
  roomDetails!: string
  accommodationID!: number;
  imageNames !: string[];
  imagePaths !: string[];
  images: string[] = []; // New property to hold image URLs
  imagesBase64!: string[]; // Add this line to define imagesBase64 property
  imageUrls!: string[]; // Add this property to hold image URLs
  accommodationName!: string;




}

export enum Type {
  Simple = 'Simple',
  Double = 'Double',
  Twin = 'Twin'
}
