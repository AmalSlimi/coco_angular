import { Component, OnInit } from '@angular/core';
import { RoomService } from '../Services/room.service';
import { Room } from '../../models/roomModel';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as saveAs from 'file-saver';
import { Accomodation } from '../../models/accomodationModel';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  selectedImage: File | null = null;
imagePaths: any;
accomodations: Accomodation[] = [];

priceRange: string;
minRent: number = 80;
maxRent: number = 7000;
filteredRooms: Room[] = [];
roomImages: { [roomId: number]: string[] } = {};
currentImageIndex: number = 0;
room: any;
  constructor(private roomService: RoomService, private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRooms();
    this.initializeRoomImages(); // Appeler la méthode d'initialisation des images

  }
  initializeRoomImages(): void {
    this.rooms.forEach(room => {
      this.roomImages[room.roomID] = room.imageUrls;
    });
  }
  filterRooms(): void {
    if (this.room) {
      this.filteredRooms = this.rooms.filter(room =>
        room.roomType.toLowerCase().includes(this.room.toLowerCase())
      );
    } else {
      this.filteredRooms = this.rooms;
    }
  }
  prevImage(room: Room) {
    this.currentImageIndex = (this.currentImageIndex === 0) ? (this.roomImages[room.roomID].length - 1) : (this.currentImageIndex - 1);
  }

  nextImage(room: Room) {
    this.currentImageIndex = (this.currentImageIndex === this.roomImages[room.roomID].length - 1) ? 0 : (this.currentImageIndex + 1);
  }
  fetchRooms(): void {
    this.roomService.getAllRooms().subscribe(
      rooms => {
        this.rooms = rooms;
        this.fetchAccommodationNames();
        this.filterRooms();

      },
      error => {
        console.error('Error fetching rooms:', error);
      }
    );
  }
  filterByHighestRent() {
    this.rooms.sort((a, b) => b.rent - a.rent);
  }

  filterByLowestRent() {
    this.rooms.sort((a, b) => a.rent - b.rent);
  }
//   filterByPriceRange() {
//     if (this.priceRange) {
//       const [minPrice, maxPrice] = this.priceRange.split('-').map(Number);
//       this.rooms = this.rooms.filter(room => room.rent >= minPrice && room.rent <= maxPrice);
//     } else {
//       this.fetchRooms();
//     }
// }

filterByPriceRange() {
  this.filteredRooms = this.rooms.filter(room => room.rent >= this.minRent && room.rent <= this.maxRent);
}

  fetchAccommodationNames(): void {
    for (const room of this.rooms) {
      this.roomService.getAccommodationNameByRoomId(room.roomID).subscribe(
        name => {
          room.accommodationName = name;
        },
        error => {
          console.error('Error fetching accommodation name:', error);
        }
      );
    }
  }
  deleteRoom(roomID: number): void {
    this.roomService.deleteRoom(roomID).subscribe(
      () => {
        console.log('Room deleted successfully');
        this.fetchRooms();
      },
      error => {
        console.error('Error deleting room:', error);
      }
    );
  }

  editRoom(roomID: number): void {
    this.router.navigate(['/update', roomID]);
  }
  navigateToViewDetails( roomID:number):void{ console.log('Room ID:', roomID);
  this.router.navigate(['/getRoomById', roomID]);
}

}
