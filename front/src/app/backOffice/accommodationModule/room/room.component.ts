import { Component, OnInit } from '@angular/core';
import { RoomService } from '../Services/room.service';
import { Room } from '../../models/roomModel';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  selectedImage: File | null = null;
imagePaths: any;
  constructor(private roomService: RoomService, private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRooms();
  }

  fetchRooms(): void {
    this.roomService.getAllRooms().subscribe(
      rooms => {
        this.rooms = rooms;
      },
      error => {
        console.error('Error fetching rooms:', error);
      }
    );
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
