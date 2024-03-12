import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../accommodationModule/Services/category.service';
import { BsModalService } from 'ngx-bootstrap/modal';

import * as QRCode from 'qrcode';


interface SubCategory {
  subCategoryID: number;
  subCategoryTitle: string;
  subCategoryDescription: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit{
  subCat:any[]=[]
  idcat:any;
  @ViewChild('myForm3') myForm: any;
  @ViewChild('myForm2') updateForm: any;
  ngOnInit(): void {
    this.getAllSubCategory();
   
  
  }
  constructor(private catsservice:CategoryService,private modelServie:BsModalService) { }
 
  getAllSubCategory(){
    this.catsservice.getALLsUBCategory().subscribe((data:any)=>{
      console.log(data);
      this.subCat=data;
    }
    )
  }
  addSubCat(){
    this.modelServie.show(this.myForm, {class: 'modal-lg'})


  }
  up(a:any){
    console.log(a);
    this.subCat=this.subCat.map((cat:any)=>{
      if(cat.subCategoryID==a.subCategoryID){
        this.onhide();
        return a;

      }
      this.onhide();
      return cat;
    }
    
    )
  
  }
  add(a:any){
    console.log(a);
    this.subCat.push(a);
    this.onhide();
  }



  delet(id:any){
    this.catsservice.deleteSubCategory(id).subscribe((data:any)=>{
      console.log(data);
      this.subCat=this.subCat.filter((cat:any)=>cat.subCategoryID!==id);
    }
    )
  }
  update(a:any){
    console.log(a);
    this.idcat=a
    this.modelServie.show(this.updateForm, {class: 'modal-lg'})
    
  }

  
  onhide(){
    this.modelServie.hide(1);
  }
  


  generateQRCode(subCat: SubCategory): string {
    const qrOptions = {
      color: {
        dark: '#000000',   // Couleur des modules sombres (par défaut)
      light: '#FFC0CB'   // Couleur des modules clairs
      }
    };
  
    const qrContent = `${subCat.subCategoryTitle}\n${subCat.subCategoryDescription}`;
    let qrCodeUrl: string = '';
    QRCode.toDataURL(qrContent, { errorCorrectionLevel: 'H', ...qrOptions }, (err: any, url: string) => {
      if (err) {
        console.error(err);
      } else {
        qrCodeUrl = url;
      }
    });
    return qrCodeUrl;
  }

}
