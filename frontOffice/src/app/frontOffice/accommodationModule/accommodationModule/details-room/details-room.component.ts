import { Component } from '@angular/core';
import { RoomService } from '../Services/room.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Room } from '../../models/roomModel';

@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrls: ['./details-room.component.scss']
})
export class DetailsRoomComponent {
  room: Room = new Room();

  constructor(private roomService: RoomService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const roomID = Number(params.get('id'));
      this.roomService.getRoomById(roomID).subscribe(room => {
        this.room = room;
      });
    });
  }
}
