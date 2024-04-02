import { Component, OnInit } from '@angular/core';
import { Accomodation } from '../../models/accomodationModel';
import { AccomodationService } from '../Services/accomodation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-accomodation',
  templateUrl: './details-accomodation.component.html',
  styleUrls: ['./details-accomodation.component.scss']
})
export class DetailsAccomodationComponent  implements OnInit{
  accomodation: Accomodation = new Accomodation();

  constructor(private accomodationService: AccomodationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const accommodationID = Number(params.get('id'));
      this.accomodationService.getAccomodationById(accommodationID).subscribe(accomodation => {
        this.accomodation = accomodation;
      });
    });
  }
}
