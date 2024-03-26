import { Component, OnInit } from '@angular/core';
import { trip } from 'src/app/backOffice/busModule/model/trip';
import { TripServiceService } from 'src/app/backOffice/busModule/service/trip-service.service';

@Component({
  selector: 'app-utrip',
  templateUrl: './utrip.component.html',
  styleUrls: ['./utrip.component.scss']
})
export class UtripComponent implements OnInit {
  listTrip: trip[] = [];

  constructor(private tripService: TripServiceService) {}

  ngOnInit() {
    this.loadTrips();
  }

  loadTrips() {
    this.tripService.getAllTrip().subscribe({
      next: (data) => this.listTrip = data,
      error: (error) => console.log(error),
      complete: () => console.log('Trips loaded successfully')
    });
  }

  

}
