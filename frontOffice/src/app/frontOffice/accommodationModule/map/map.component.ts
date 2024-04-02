
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import { GeoLocationService } from '../accommodationModule/Services/geo-location.service';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() accomodationLocation: string = '';
  searchQuery: string = '';
  markerIconUrl = './marker-icon.png';
  @ViewChild('map', { static: true }) mapContainer!: ElementRef;
  private map!: L.Map;
  private centroid: L.LatLngExpression = [34, 9];
  private searchResult: any;

  constructor(private geoLocationService: GeoLocationService) { }

  ngOnInit(): void {
    this.initMap();
      this.searchLocation(this.accomodationLocation);

  }
  private searchLocation(description: string): void {
    const provider = new OpenStreetMapProvider();
    provider.search({ query: description })
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
          console.log('No results found for:', description);
        }
      })
      .catch(error => {
        console.error('Error performing search:', error);
      });
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

    tiles.addTo(this.map);
  }



}
