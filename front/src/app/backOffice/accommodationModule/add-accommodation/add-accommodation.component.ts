import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AccomodationService } from '../Services/accomodation.service';
import { Router } from '@angular/router';
import {Accomodation} from '../../models/accomodationModel'
import { Category } from '../../models/category';
import { NewCategoryService } from '../Services/new-category.service';
@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.scss']
})
export class AddAccommodationComponent implements OnInit{


  constructor(private accomodationService :AccomodationService , private router: Router, private formBuilder: FormBuilder ,private categoryService: NewCategoryService) { }
  categories: Category[] = [];

  accomodation: Accomodation = new Accomodation();
  formSubmitted: boolean = false;


  ngOnInit(): void {
    this.loadCategories();

  }
  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }
  add(f: NgForm): void {
    // Vérifier si la valeur de this.accomodation.categoryID est définie
    if (!this.accomodation.categoryID) {
      console.error("Category ID is not defined");
      return; // Arrêter l'exécution si categoryID n'est pas défini
    }

    const selectedCategory = this.categories.find(category => category.categoryID === this.accomodation.categoryID);
    if (selectedCategory) {
      this.accomodation.categoryTitle = selectedCategory.categoryTitle;
    }

    this.accomodationService.addAccomodation(this.accomodation, this.accomodation.categoryID).subscribe(
      response => {
        console.log('Accommodation added successfully:', response);
        this.router.navigate(['/getAllAccomodation']);
      },
      error => {
        console.error('Error adding accommodation:', error);
      }
    );
  }

}
