import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../service/ticket.service';
import { TripStop } from 'src/app/backOffice/busModule/model/TripStop';
import { TripStopServiceService } from 'src/app/backOffice/busModule/service/trip-stop-service.service';
import { ticket } from '../model/ticket';
import { StopServiceService } from 'src/app/backOffice/busModule/service/stop-service.service';
import { stop } from 'src/app/backOffice/busModule/model/stop';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.scss']
})
export class AddticketComponent {
  ticket: ticket = new ticket();
  ticketAdded: boolean = false;
  tripStops: TripStop[] = [];
  Stops: stop[] = [];
  selectedTripStop: TripStop | null = null;
  localDate: string = new Date().toISOString().slice(0, 10); // Get local date in ISO format

  constructor(
    private router: Router,
    private ticketservice: TicketService,
    private tripstopservice: TripStopServiceService,
    private stopservice: StopServiceService,
  ) {}

  ngOnInit(): void {
    this.fetchTripStops(); // Fetch trip stops when component initializes
  }

  fetchTripStops(): void {
    this.tripstopservice.getAllTripStop().subscribe(
      (tripStops: TripStop[]) => {
        this.tripStops = tripStops;
      },
      (error) => {
        console.error('Error fetching trip stops:', error);
        // Handle error as needed
      }
    );
  }
  fetchStops(): void {
    this.stopservice.getAllStop().subscribe(
      (Stops: stop[]) => {
        this.Stops = Stops;
      },
      (error) => {
        console.error('Error fetching stops:', error);
        // Handle error as needed
      }
    );
  }

  addTicket(): void {
    if (!this.selectedTripStop) {
      alert('Please select a trip stop.');
      return;
    }

    // Assuming you have the userId available, replace '1' with the actual userId
    
    const tripStopId = this.selectedTripStop.id;

     // Assuming selectedTripStop has an 'id' property

    this.ticketservice.addTicket( tripStopId).subscribe(
      (data) => {
        console.log('Ticket added successfully:', data);
        this.ticketAdded = true;
        this.router.navigate(['/ticket']);
      },
      (error) => {
        console.error('Error adding ticket:', error);
        alert('Error adding ticket: ' + error.message); // Displaying error message from the error object
      }
    );
  }

}
