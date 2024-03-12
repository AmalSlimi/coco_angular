import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CategoryService } from '../accommodationModule/Services/category.service';
import { UpdateCategoryComponent } from '../accommodationModule/update-category/update-category.component';



import * as QRCode from 'qrcode';

interface Category {
  categoryID: number;
  categoryTitle: string;
  categoryDescription: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  @ViewChild('myForm') myForm: any;
  @ViewChild('myForm2') updateForm: any;
  cats:any[]=[]
  idcat:any;
  constructor(private modelsevice:BsModalService,private catsservice:CategoryService) { }

  ngOnInit(): void {
    this.catsservice.getAllCategory().subscribe((data:any)=>{
      this.cats=data;
      console.log(this.cats);
    }
    )
  }
  addCat(){
    this.modelsevice.show(this.myForm, {class: 'modal-lg'})
  }
  onhide(){
    this.modelsevice.hide(1);
  }
  add(a:any){
    console.log(a);
    this.cats.push(a);
    this.onhide();
  }
  update(a:any){
    console.log(a);
    this.cats=this.cats.map((cat:any)=>{
      if(cat.categoryID==a.categoryID){
        this.onhide();
        return a;

      }
      this.onhide();
      return cat;
    }
    
    )
    this.modelsevice.hide(1);
  }
  deleteCat(id:any){
    this.catsservice.deleteCategory(id).subscribe((data:any)=>{
      console.log(data);
      this.cats=this.cats.filter((cat:any)=>cat.categoryID!==id);
     
    }
    )
  }
    updateCat(id:any){
     console.log(id);
      this.idcat=id;
      let  modRef= this.modelsevice.show(this.updateForm, {class: 'modal-lg'});
    }


    generateQRCode(cats: Category): string {
      const qrOptions = {
        color: {
          dark: '#000000',   // Couleur des modules sombres (par défaut)
        light: '#FFC0CB'   // Couleur des modules clairs
        }
      };
    
      const qrContent = `${cats.categoryTitle}\n${cats.categoryDescription}`;
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
