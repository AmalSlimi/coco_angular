import { Component, OnInit } from '@angular/core';
import { TripStopServiceService } from '../service/trip-stop-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TripStop } from '../model/TripStop';
import { TripServiceService } from '../service/trip-service.service';
import { StopServiceService } from '../service/stop-service.service';

@Component({
  selector: 'app-addtrip-stop',
  templateUrl: './addtrip-stop.component.html',
  styleUrls: ['./addtrip-stop.component.scss']
})
export class AddtripStopComponent implements OnInit {

  stops: any[] = [];
  trips: any[] = [];
  TripStopForm!: FormGroup;

  constructor(
    private tss: TripStopServiceService,
    private ts: TripServiceService,
    private ss: StopServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.TripStopForm = new FormGroup({
      tripId: new FormControl('', Validators.required),
      stopId: new FormControl('', Validators.required),
      departureTime: new FormControl('', Validators.required),
      arrivalTime: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
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

  save() {
    const { tripId, stopId, departureTime, arrivalTime, amount } = this.TripStopForm.value;

    const tripStop: TripStop = {
      id: 0,
      idTrip: tripId,
      idStop: stopId,
      arrivalTime: arrivalTime,
      departureTime: departureTime,
      amount: amount
    };

    this.tss.addTripStop(tripId, stopId, tripStop).subscribe(
      () => this.route.navigateByUrl('/trip')
    );
  }
}
