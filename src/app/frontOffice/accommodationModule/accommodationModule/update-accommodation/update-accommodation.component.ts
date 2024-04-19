import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccomodationService } from '../Services/accomodation.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Accomodation } from '../../models/accomodationModel';

@Component({
  selector: 'app-update-accommodation',
  templateUrl: './update-accommodation.component.html',
  styleUrls: ['./update-accommodation.component.scss']
})
export class UpdateAccommodationComponent implements OnInit{

  accomodation: Accomodation = new Accomodation();
  formSubmitted: boolean = false;
  id: number;

  constructor(    private route: ActivatedRoute,
    private accomodationService: AccomodationService, private router: Router, private formBuilder: FormBuilder)
  {
    this.id = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  update(f: NgForm): void {
    this.accomodationService.updateAccomodation(this.id,this.accomodation).subscribe(
      response => {
        console.log('accomodation updated successfully:', response);
        this.router.navigate(['/getAllAccomodation'])

      },
      error => {
        console.error('Error adding accomodation:', error);
      }
    );
  }
}

