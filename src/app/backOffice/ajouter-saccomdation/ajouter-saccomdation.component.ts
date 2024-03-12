import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from '../accommodationModule/Services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajouter-saccomdation',
  templateUrl: './ajouter-saccomdation.component.html',
  styleUrls: ['./ajouter-saccomdation.component.scss']
})
export class AjouterSAccomdationComponent implements OnInit {

  file! : File;
  ajouterForm:FormGroup
  @Output() eventadd:EventEmitter<any>=new EventEmitter<any>()
  @Output() evnt = new EventEmitter();
  constructor(private ser:CategoryService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.ajouterForm=this.fb.group({
      address:[""],
      localisation:[""],
      rules:[""],
      rent_price:[""],
      numberOfRoom:[""]

    })
    
  }
  selectFile(event:any) {
    console.log(event)
    if(event.target.files.length>0) {
      this.file = event.target.files[0];

    }
  }
  add(){
    console.log(this.ajouterForm.value)
    this.ser.AjouterAccommodation(this.ajouterForm.value.address,this.ajouterForm.value.localisation,this.ajouterForm.value.rules
    ,this.ajouterForm.value.rent_price,this.ajouterForm.value.numberOfRoom,this.file).subscribe(res=>{
      console.log(res)
      this.eventadd.emit(res)
    })
  }




  reset(){
    this.evnt.emit("Reset");
  }

}
