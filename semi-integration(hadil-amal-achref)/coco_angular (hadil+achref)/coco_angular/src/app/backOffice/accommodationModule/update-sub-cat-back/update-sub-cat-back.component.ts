import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewCategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/new-category.service';
import { NewSubCategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/new-sub-category.service';
import { Category } from 'src/app/frontOffice/accommodationModule/models/category';
import { SubCategory } from 'src/app/frontOffice/accommodationModule/models/subCategory';

@Component({
  selector: 'app-update-sub-cat-back',
  templateUrl: './update-sub-cat-back.component.html',
  styleUrls: ['./update-sub-cat-back.component.scss']
})
export class UpdateSubCatBackComponent implements OnInit {
  subcategory: SubCategory = {} as SubCategory;
  formSubmitted: boolean = false;
  id!: number;
  categories: Category[] = []; // Assuming 'Category' is the correct type
  // clé de recaptcha
  siteKey : string="6LeBnZUpAAAAAEDMtn5PQAEpTInPp0rB_fR60D-A";
  aFormGroup!: FormGroup;
  constructor(private fb:FormBuilder,private subcategoryService :NewSubCategoryService,private route: ActivatedRoute, private router: Router,private categoryService : NewCategoryService) { }

  ngOnInit(): void {
      // Récupérer l'ID de l'URL
      this.route.params.subscribe(params => {
        this.id = params['id'];
        
        // Récupérer la sous-catégorie par ID
        this.subcategoryService.getSubCategoryById(this.id).subscribe(
          (response: SubCategory) => {
            this.subcategory = response; // Associer la sous-catégorie récupérée
          },
          error => {
            console.error('Error fetching subcategory:', error);
          }
        );
  
        // Récupérer toutes les catégories (si nécessaire)
        this.categoryService.getAllCategories().subscribe(
          (categories: Category[]) => {
            this.categories = categories;
          },
          error => {
            console.error('Error fetching categories:', error);
          }
        );
    });
  }



  update(f: NgForm): void {
    this.subcategoryService.updateSubCategory(this.id,this.subcategory).subscribe(
      response => {
        console.log('subcategory updated successfully:', response);
        this.router.navigate(['/subcat'])

      },
      error => {
        console.error('Error adding subcategory:', error);
      }
    );
  }

}

