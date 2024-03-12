import { Component } from '@angular/core';
import { RoomServiceService } from 'src/app/ServiceCollocation/room-service.service';
import { Room } from 'src/app/backOffice/model/Room';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
listRoom: Room []=[];

//étape1: injection de service
  constructor(private rs:RoomServiceService){}

  //etape2: remplir listProduct à partir de la liste de service
  ngOnInit(){
    //this.listProduct=this.ps.listProduct
    this.rs.getAll().subscribe((response:any)=>{
        this.listRoom = response;
    });
    
  }

 

}
