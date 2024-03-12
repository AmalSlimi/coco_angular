import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CategoryService } from '../Services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  @Input() id:any;
  cat:any;
  catForm:FormGroup;
  @Output() updateCategory:EventEmitter<any>=new EventEmitter();
  @Output() evnt = new EventEmitter();

  constructor(private route:ActivatedRoute,private catservice:CategoryService,private fb:FormBuilder) { }

  ngOnInit(): void {

    console.log(this.id);
    this.catservice.getCategoryById(this.id).subscribe((data:any)=>{
      console.log(data);
      this.cat=data;
      this.catForm=this.fb.group({
        categoryTitle:[this.cat.categoryTitle],
        categoryDescription:[this.cat.categoryDescription]
      })
    }
    )
    
  }
  reset(){
    this.evnt.emit("Reset");
  }
  update(){
    console.log(this.catForm.value);
    this.catservice.updateCategory(this.id,this.catForm.value).subscribe((data:any)=>{
      console.log(data);
      this.updateCategory.emit(data);
    }
  
    )
  }
  
    
    
  }


