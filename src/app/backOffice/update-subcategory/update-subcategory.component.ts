import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../accommodationModule/Services/category.service';

@Component({
  selector: 'app-update-subcategory',
  templateUrl: './update-subcategory.component.html',
  styleUrls: ['./update-subcategory.component.scss']
})
export class UpdateSubcategoryComponent implements OnInit {
  @Input() id:any;
  @Output() evnt = new EventEmitter();
  updateSubCatForm:FormGroup;
  @Output() updateSubCategory:EventEmitter<any>=new EventEmitter();
  cats:any
  cat:any;

  constructor(private fb:FormBuilder,private subcatservice:CategoryService) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getSubCatById();
    this.updateSubCatForm=this.fb.group({
      subCategoryTitle:[''],
      subCategoryDescription:[''],
      category:['']
    })
  }
  getAllCategory(){
    this.subcatservice.getAllCategory().subscribe((data:any)=>{
      console.log(data);
      this.cats=data;
    }
    )
  }
  getSubCatById(){
    this.subcatservice.getSubCategoryById(this.id).subscribe((data:any)=>{
      console.log(data);
      this.cats=data;
      this.updateSubCatForm.patchValue(data);
    }
    )
  }
  reset(){
    this.evnt.emit("Reset")
  }
  add(){
    console.log(this.updateSubCatForm.value);
    this.subcatservice.updateSubCategory(this.id,this.updateSubCatForm.value).subscribe((data:any)=>{
      console.log(data);
      this.updateSubCategory.emit(data);
    }
    )
  }


}
