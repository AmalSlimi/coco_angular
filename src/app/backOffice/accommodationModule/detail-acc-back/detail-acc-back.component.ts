import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccomodationService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/accomodation.service';
import { Accomodation } from 'src/app/frontOffice/accommodationModule/models/accomodationModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import * as saveAs from 'file-saver';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-detail-acc-back',
  templateUrl: './detail-acc-back.component.html',
  styleUrls: ['./detail-acc-back.component.scss']
})
export class DetailAccBackComponent implements OnInit{
  accomodation: Accomodation = new Accomodation();

  constructor(private accomodationService: AccomodationService, private router: Router, private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const accommodationID = Number(params.get('id'));
      this.accomodationService.getAccomodationById(accommodationID).subscribe(accomodation => {
        this.accomodation = accomodation;
      });
    });
  }


  openImage(filename: string) {
    const headers = new HttpHeaders().set('Accept', 'application/avif'); // Adjust content type as needed
    this.http.get(`http://localhost:8085/spring2024/api/accommodations/{accomodationId}/image`, { headers, responseType: 'blob' })
      .subscribe(
        (blob) => {
          const file = new Blob([blob], { type: 'application/avif' }); // Adjust content type as needed
          saveAs(file, filename);
        },
        (error) => {
          console.error('Erreur lors de l\'ouverture du fichier : ', error);
        }
      );
  }
}
