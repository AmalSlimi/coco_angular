import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/room.service';
import { Room } from 'src/app/frontOffice/accommodationModule/models/accomodationModel';

@Component({
  selector: 'app-update-room-back',
  templateUrl: './update-room-back.component.html',
  styleUrls: ['./update-room-back.component.scss']
})
export class UpdateRoomBackComponent implements OnInit{

  room: Room = new Room();
  formSubmitted: boolean = false;
  id: number;
  aFormGroup!: FormGroup;
  siteKey : string="6LeBnZUpAAAAAEDMtn5PQAEpTInPp0rB_fR60D-A";


  constructor(    private route: ActivatedRoute,
    private roomService: RoomService, private router: Router, private formBuilder: FormBuilder)
  {
    this.id = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Récupérer l'ID du paramètre de l'URL
      // Obtenir la pièce existante (room) par l'ID
      this.roomService.getRoomById(this.id).subscribe(
        (room: Room) => {
          this.room = room; // Associer la pièce récupérée
        },
        error => {
          console.error('Error fetching room:', error);
        }
      );
    });

  }
  update(f: NgForm): void {
    this.roomService.updateRoom(this.id,this.room).subscribe(
      response => {
        console.log('Room updated successfully:', response);
        this.router.navigate(['/room'])

      },
      error => {
        console.error('Error adding room:', error);
      }
    );
  }
}

