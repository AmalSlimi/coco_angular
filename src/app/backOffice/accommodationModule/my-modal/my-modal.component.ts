import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit{
  @Output() evnt = new EventEmitter();
  @Output() evnt2 = new EventEmitter();
  categoryForm!: FormGroup;
  ngOnInit(): void {
    this.categoryForm=this.fb.group({
      categoryTitle:[''],
      categoryDescription:['']
    })
    
   
  }constructor(private fb:FormBuilder,private cats:CategoryService) { }
  add(){
    console.log(this.categoryForm.value);
    this.cats.addCategory(this.categoryForm.value).subscribe((data:any)=>{
      console.log(data);
      this.evnt2.emit(data);
    }
    )
    
  }
  reset(){
    
    this.evnt.emit("reset");
    
  }

}
