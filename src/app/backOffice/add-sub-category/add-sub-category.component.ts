import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../accommodationModule/Services/category.service';



@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent  implements OnInit{
  subCatForm:FormGroup
  @Output () addevent:EventEmitter<any>=new EventEmitter();
  @Output() evnt = new EventEmitter();
  cats:any[]=[]
  ngOnInit(): void {
    this.getAllCategory();
    this.subCatForm=this.fb.group({
      subCategoryTitle:[''],
      subCategoryDescription:[''],
      category:['']
    })
    
   
  }
  getAllCategory(){
    this.catsservice.getAllCategory().subscribe((data:any)=>{
      console.log(data);
      this.cats=data;
    }
    )
  }
  constructor(private  fb:FormBuilder,private catsservice:CategoryService) { }
  add(){
    console.log(this.subCatForm.value);
    this.catsservice.addSubCategory(this.subCatForm.value).subscribe((data:any)=>{
      console.log(data);
      this.addevent.emit(data);
    }
    )
  }
  reset(){
    this.evnt.emit("Reset");
  }

}
