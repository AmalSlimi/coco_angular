import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../accommodationModule/Services/room.service';
import { Room } from '../models/roomModel';

@Component({
  selector: 'app-image-by-room',
  templateUrl: './image-by-room.component.html',
  styleUrls: ['./image-by-room.component.scss']
})
export class ImageByRoomComponent implements OnInit {
  roomId: number;
  room: Room;

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit(): void {

  }



}
