import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts"
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { AccomodationService } from '../Services/accomodation.service';
import * as QRCode from 'qrcode';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import { Accomodation } from '../../models/accomodationModel'; // Assuming this is the correct model
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileResponse } from '../../models/FileResponse';
import * as saveAs from 'file-saver';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {
  accommodations: Accomodation[] = [];
  searchQuery: string = '';
  markerIconUrl = './marker-icon.png';
  @ViewChild('map', { static: true }) mapContainer!: ElementRef;
  private map!: L.Map;
  private centroid: L.LatLngExpression = [34, 9];
  accommodation: Accomodation = new Accomodation();
  minRent: number = 80;
  maxRent: number = 7000;
  filteredAccommodations: Accomodation[] = [];
  acc: string = '';
  imageFiles: FileResponse[] = [];
  otherFiles: FileResponse[] = [];
  selectedFile: File | null = null;
  images!: string[];
  constructor(private modelService: BsModalService, private accommodationService: AccomodationService, private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAccommodations();
    this.initMap();
  }

  filterByPriceRange(): void {
    this.filteredAccommodations = this.accommodations.filter(acc => acc.rent_price <= this.maxRent && acc.rent_price >= this.minRent);
  }
  applyFilter(): void {
    if (this.acc.trim() === '') {
      this.filteredAccommodations = this.accommodations;
    } else {
      this.filteredAccommodations = this.accommodations.filter(accommodation => {
        return Object.values(accommodation).some(value =>
          value.toString().toLowerCase().includes(this.acc.toLowerCase())
        );
      });
    }
  }
  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:8081/Pi/training/{trainingId}/image', formData).subscribe(
        (response: any) => {
          console.log('image added successfully: ', response);
          this.selectedFile = null;
          this.loadFiles();
        },
        (error) => {
          console.error('Error adding file: ', error);
        }
      );
    } else {
      console.error('No file selected.');
    }
  }
  isImage(fileName: string): boolean {
    return !!fileName && (fileName.endsWith('.png') || fileName.endsWith('.jpg') || fileName.endsWith('.avif') || fileName.endsWith('.svg'));
  }

  loadFiles() {
    this.http.get<FileResponse[]>('http://localhost:8081/Pi/training/getAllTrainings').subscribe(
      (response) => {
        this.imageFiles = response.filter(file => this.isImage(file.fileName));
        this.otherFiles = response.filter(file => !this.isImage(file.fileName));
      },
      (error) => {
        console.error('Erreur lors du chargement des fichiers : ', error);
      }
    );
  }

  openImage(filename: string) {
    const headers = new HttpHeaders().set('Accept', 'application/avif'); // Adjust content type as needed
    this.http.get(`http://localhost:8081/Pi/training/{trainingId}/image`, { headers, responseType: 'blob' })
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
    this.accommodationService.getAllAccomodations().subscribe(
      (accommodations: Accomodation[]) => {
        this.accommodations = accommodations;
        this.applyFilter(); // Appliquer le filtre une fois les accommodations récupérées
      },
      error => {
        console.error('Error fetching accommodations:', error);
      }
    );
  }
  onhide() {
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
    const qrContent = `${accommodation.address}\n${accommodation.rent_price}\n${accommodation.rules}\n${accommodation.numberOfRoom}\n${accommodation.localisation}`;
    let qrCodeUrl: string = '';
    QRCode.toDataURL(qrContent, { errorCorrectionLevel: 'H' }, (err: any, url: string) => {
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
            fillColor: '#3f51b5',
            color: '#ffffff',
            margin: [0, 0, 0, 20]
          },
          cell: {
            fontSize: 16,
            bold: false,
            fillColor: '#f5f5f5',
            margin: [0, 5, 0, 5]
          }
        }
      };

      pdfMake.createPdf(docDefinition).open();
    });
  }

  navigateToViewDetails(accommodationID: number): void {
    console.log('Accomodation ID:', accommodationID);
    this.router.navigate(['/getAccomodationById', accommodationID]);
  }
}
