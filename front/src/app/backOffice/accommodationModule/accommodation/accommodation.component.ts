import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts"
import { TDocumentDefinitions, Content, ContentImage } from "pdfmake/interfaces";
import { AccomodationService } from '../Services/accomodation.service';



(pdfMake as any).vfs = pdfFonts.pdfMake.vfs

import * as QRCode from 'qrcode';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import { Accomodation } from '../../models/accomodationModel';

interface Accommodation {
  accommodationID: any;
  address:string;
  rent_price: number
  numberOfRoom:number;
  rules:string;
  localisation:string;
}

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent  implements OnInit {
  accomodation!:string;
  accommodations: Accomodation[] = [];
  searchQuery: string = '';
  markerIconUrl = './marker-icon.png'; // Updated marker icon URL
  @ViewChild('map', { static: true }) mapContainer!: ElementRef;
  private map!: L.Map;
  private centroid: L.LatLngExpression = [34, 9]; // Adjusted centroid coordinates
  private searchResult: any;
  accommodation: Accomodation= new Accomodation() ;
  constructor(private modelService:BsModalService ,private accommodationService: AccomodationService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAccommodations();
    this.initMap();


  }

  private initMap(): void {
    this.map = L.map(this.mapContainer.nativeElement, {
      center: this.centroid,
      zoom: 6,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 6,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const provider = new OpenStreetMapProvider();
    const searchControl = new (GeoSearchControl as any)({
      provider: provider,
      style: 'bar',
      autoClose: true,
      searchLabel: this.accommodation.localisation,
      showMarker: true,
      retainZoomLevel: true,
      animateZoom: true,
      keepResult: true,
      updateMap: true,
      popupFormat: ({ query, result }: { query: string; result: any }) => result.label,
      maxMarkers: 1,
      marker: {
        icon: L.icon({
          iconUrl: this.markerIconUrl,
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40],
        }),
      },
    }).addTo(this.map);

    // Trigger search programmatically
    provider.search({ query: this.accommodation.localisation })
      .then(results => {
        if (results.length > 0) {
          const result = results[0];
          // Handle search result
          console.log('Search result:', result);
          this.map.setView([result.y, result.x], this.map.getZoom());
          L.marker([result.y, result.x], {
            icon: L.icon({
              iconUrl: this.markerIconUrl,
              iconSize: [40, 40],
              iconAnchor: [20, 40],
              popupAnchor: [0, -40],
            }),
          }).addTo(this.map);
        } else {
          console.log('No results found for:', this.accommodation.localisation);
        }
      })
      .catch(error => {
        console.error('Error performing search:', error);
      });

    tiles.addTo(this.map);
  }

  fetchAccommodations() {
    // Assuming you have a service method to fetch accommodations
    this.accommodationService.getAllAccomodations().subscribe(
      (accommodations: Accomodation[]) => {
        this.accommodations = accommodations;

      },

      error => {
        console.error('Error fetching accommodations:', error);
      }
    );
  }


  onhide(){
    this.modelService.hide(1)
  }

  navigateToUpdateAccomodation(accommodationID: number): void {
    this.router.navigate(['/updateAccomodation', accommodationID]);
  }
  delete(accommodationID: number): void {
    this.accommodationService.deleteAccomodation(accommodationID).subscribe({
      next: () => {
        console.log('Accomodation deleted successfully!');
        this.fetchAccommodations();
      },
      error: (err: any) => {
        console.error('Error deleting Accomodation:', err);
      }
    });
  }

  generateQRCode(accommodation: Accomodation): string {
    const qrOptions = {
      color: {
        dark: '#000000',   // Couleur des modules sombres (par défaut)
      light: '#FFC0CB'   // Couleur des modules clairs
      }
    };

    const qrContent = `${accommodation.address}\n${accommodation.rent_price}\n${accommodation.rules}\n${accommodation.numberOfRoom}\n${accommodation.localisation}`;
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


  generatePDF(accommodation: Accomodation) {
    const qrContent = `${accommodation.address}\n${accommodation.rent_price}\n${accommodation.rules}\n${accommodation.numberOfRoom}\n${accommodation.localisation}`;

    QRCode.toDataURL(qrContent, (err: any, qrDataURL: string) => {
      if (err) {
        console.error('Error generating QR code:', err);
        return;
      }

      // Define PDF document definition
      const docDefinition: TDocumentDefinitions = {
        content: [
          {
            table: {
              headerRows: 1,
              widths: ['*', '*'],
              body: [
                [{ text: 'Accommodation Information', colSpan: 2, style: 'header' }, ''],
                ['Address:', { text: accommodation.address, style: 'cell' }],
                ['Rent Price:', { text: accommodation.rent_price, style: 'cell' }],
                ['Rules:', { text: accommodation.rules, style: 'cell' }],
                ['Number of Rooms:', { text: accommodation.numberOfRoom, style: 'cell' }],
                ['Location:', { text: accommodation.localisation, style: 'cell' }],
                [{ image: qrDataURL, colSpan: 2, width: 100, alignment: 'center', margin: [0, 20] }, '']
              ]
            }
          }
        ],
        styles: {
          header: {
            fontSize: 24,
            bold: true,
            alignment: 'center',
            fillColor: '#3f51b5', // Background color of the title
            color: '#ffffff', // Text color of the title
            margin: [0, 0, 0, 20] as [number, number, number, number] // Format [top, right, bottom, left]
          },
          cell: {
            fontSize: 16,
            bold: false,
            fillColor: '#f5f5f5', // Background color of the cells
            margin: [0, 5, 0, 5] as [number, number, number, number] // Format [top, right, bottom, left]
          }
        }
      };

      // Create and open the PDF
      pdfMake.createPdf(docDefinition).open();
    });
  }

  navigateToViewDetails( accommodationID:number):void{ console.log('Accomodation ID:', accommodationID);
  this.router.navigate(['/getAccomodationById', accommodationID]);
}

}
