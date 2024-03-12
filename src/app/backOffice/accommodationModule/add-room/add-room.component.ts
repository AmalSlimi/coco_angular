import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../Services/category.service';



@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  @Output() evnt = new EventEmitter();
  ajouterRoomForm:FormGroup
  accommodation:any[]=[];
  file:File
  ngOnInit(): void {
    this.getAllAccommodation();
    this.ajouterRoomForm=this.fb.group({
      roomType:[''],
      rent:[''],
      amenities:[''],
      roomDetails:['']
      ,accommodation:['']
      
    })
  
  }
  constructor(private fb:FormBuilder,private myser:CategoryService) { }

  add(){
    this.myser.AddRoom(this.ajouterRoomForm.value.roomType,this.ajouterRoomForm.value.rent,this.ajouterRoomForm.value.amenities,this.ajouterRoomForm.value.roomDetails,this.ajouterRoomForm.value.accommodation,this.file).subscribe(
      (data:any)=>{
        console.log(data);
        this.evnt.emit(data);
      }
    )
  }
  selectFile($event:any){
    console.log($event.target.files[0]);
    this.file=$event.target.files[0];

  }
  getAllAccommodation(){
    this.myser.getAllAccommodation().subscribe(
      (data:any)=>{
        console.log(data);
        this.accommodation=data;
      }
    )
  }
 

reset(){
  this.evnt.emit("Reset");
}

}







 