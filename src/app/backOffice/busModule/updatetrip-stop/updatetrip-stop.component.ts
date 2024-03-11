import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TripStopServiceService } from '../service/trip-stop-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TripStop } from '../model/TripStop';
import { StopServiceService } from '../service/stop-service.service';
import { TripServiceService } from '../service/trip-service.service';

@Component({
  selector: 'app-updatetrip-stop',
  templateUrl: './updatetrip-stop.component.html',
  styleUrls: ['./updatetrip-stop.component.scss']
})
export class UpdatetripStopComponent implements OnInit {
  stops: any[] = [];
  trips: any[] = [];
  tripStopForm: FormGroup;
  id!: number;

  constructor(
    private tripStopService: TripStopServiceService,
    private ss: StopServiceService,
    private ts: TripServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tripStopForm = new FormGroup({
      stopId: new FormControl('', Validators.required),
      tripId: new FormControl('', Validators.required),
      arrivalTime: new FormControl('', Validators.required),
      departureTime: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.tripStopService.getDetailtrip(this.id).subscribe((tripStop: TripStop) => {
      this.tripStopForm.patchValue(tripStop);
      this.tripStopForm.patchValue({ stopId: tripStop.idStop, tripId: tripStop.idTrip });
    });
    this.loadStops();
    this.loadTrips();
  }


  loadStops() {
    this.ss.getAllStop().subscribe(
      (data: any[]) => {
        this.stops = data;
      },
      error => {
        console.error('Error loading stops:', error);
      }
    );
  }

  loadTrips() {
    this.ts.getAllTrip().subscribe(
      (data: any[]) => {
        this.trips = data;
      },
      error => {
        console.error('Error loading trips:', error);
      }
    );
  }

  updateTrip(): void {
    if (this.tripStopForm.valid) {
      const updatedTrip: TripStop = {
        ...this.tripStopForm.value,
        id: this.id
      };
      this.tripStopService.updateTripStop(updatedTrip).subscribe({
        next: (response) => {
          console.log('Trip updated successfully', response);
          this.router.navigate(['/tripStop']);
        },
        error: (error) => console.error('Error updating trip', error)
      });
    }
  }
}
