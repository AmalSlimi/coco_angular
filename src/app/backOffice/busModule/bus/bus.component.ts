import { Component, OnInit } from '@angular/core';
import { bus } from '../model/bus';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { trip } from '../model/trip';
import { BusServiceService } from '../service/bus-service.service';
import { TripServiceService } from '../service/trip-service.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent  {

  listBus: bus[] = [];
  listTrips: trip[] = [];
  selectedTrip!: number;


  constructor(private bs: BusServiceService, private ts: TripServiceService,private snackBar: MatSnackBar,) {}

  ngOnInit() {
    this.loadBuses();
    this.loadTrips();
  }
  loadTrips() {
    this.ts.getAllTrip().subscribe({
      next: (data) => this.listTrips = data,
      error: (error) => console.log(error),
      complete: () => console.log('done')
    });
  }

  loadBuses() {
    this.bs.getAllBus().subscribe({
      next: (data) => this.listBus = data,
      error: (error) => console.log(error),
      complete: () => console.log('done')
    });
  }
  supp(id:number){
    this.bs.removeBus(id).subscribe(
     ()=>this.ngOnInit()
    )
  }
  assignBusToTrip(busId: number, tripId: number) {
    this.bs.assignBusToTrip(busId, tripId).subscribe(
      () => {
        console.log('Bus assigned to trip successfully');
        this.openSnackBar('Bus assigned to trip successfully'); // Notify admin with a snackbar
        const busIndex = this.listBus.findIndex(bus => bus.id === busId);
        if (busIndex !== -1) {
          this.listBus[busIndex].availability = 'Not Available';
        }
      },
      (error) => {
        console.log('Error assigning bus to trip:', error);
      }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      verticalPosition: 'top', // Display snackbar at the top
    });
  }
}
