import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trip } from '../model/trip';
import { TripServiceService } from '../service/trip-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetrip',
  templateUrl: './updatetrip.component.html',
  styleUrls: ['./updatetrip.component.scss']
})
export class UpdateTripComponent implements OnInit {
  tripForm: FormGroup;
  id!: number;
  trip!: trip;

  constructor(
    private tripService: TripServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tripForm = new FormGroup({
      name: new FormControl('', Validators.required),
      departureLocation: new FormControl('', Validators.required),
      arrivalLocation: new FormControl('', Validators.required),
      estimatedDuration: new FormControl('', Validators.required),
      fare: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.tripService.getDetailtrip(this.id).subscribe((trip: trip) => {
      this.trip = trip;
      this.tripForm.patchValue({
        name:trip.name,
        departureLocation: trip.departureLocation,
        arrivalLocation: trip.arrivalLocation,
        estimatedDuration: trip.estimatedDuration,
        fare: trip.fare
      });
    });
  }

  updateTrip(): void {
    if (this.tripForm.valid) {
      const updatedTrip: trip = {
        idTrip: this.id,
        name: this.tripForm.value.name,
        departureLocation: this.tripForm.value.departureLocation,
        arrivalLocation: this.tripForm.value.arrivalLocation,
        estimatedDuration: this.tripForm.value.estimatedDuration,
        fare: this.tripForm.value.fare
      };
      this.tripService.updatetrip(updatedTrip).subscribe({
        next: (response) => {
          console.log('Trip updated successfully', response);
          this.router.navigate(['/tripStop']);
        },
        error: (error) => console.error('Error updating trip', error)
      });
    }
  }
}
