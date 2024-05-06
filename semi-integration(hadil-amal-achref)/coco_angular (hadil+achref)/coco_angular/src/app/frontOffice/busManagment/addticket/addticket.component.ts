import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../service/ticket.service';
import { TripStop } from 'src/app/backOffice/busModule/model/TripStop';
import { TripStopServiceService } from 'src/app/backOffice/busModule/service/trip-stop-service.service';
import { ticket } from '../model/ticket';
import { StopServiceService} from 'src/app/backOffice/busModule/service/stop-service.service';
import { stop } from 'src/app/backOffice/busModule/model/stop';
import { AudioService } from '../service/audio.service';

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
  localDate: string = new Date().toISOString().slice(0, 10);
  idTrip!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketservice: TicketService,
    private tripstopservice: TripStopServiceService,
    private stopservice: StopServiceService,
    private audioservice: AudioService,

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idTrip = +params['id'];
      this.fetchTripStops(this.idTrip);
      this.audioservice.stopSound();
    });
  }

  fetchTripStops(idTrip:number): void {
    this.tripstopservice.gettripStopsbyTrip(idTrip).subscribe(
      (tripStops: TripStop[]) => {
        this.tripStops = tripStops;
        // Pour chaque tripStop, récupérez les détails de l'arrêt
        for (let tripStop of this.tripStops) {
          this.fetchStopDetails(tripStop);
        }
      },
      (error) => {
        console.error('Error fetching trip stops:', error);
      }
    );
  }

  fetchStopDetails(tripStop: TripStop): void {
    this.stopservice.getDetailStop(tripStop.idStop).subscribe(
      (stop: stop) => {
        tripStop.stop = stop; // Remplissez la propriété 'stop' du tripStop avec les détails de l'arrêt
      },
      (error) => {
        console.error('Error fetching stop details:', error);
      }
    );
  }


  addTicket(): void {
    if (!this.selectedTripStop) {
      alert('Please select a trip stop.');
      return;
    }



    const tripStopId = this.selectedTripStop.id;



    this.ticketservice.addTicket( tripStopId).subscribe(
      (data) => {
        console.log('Ticket added successfully:', data);
        this.ticketAdded = true;
        this.router.navigate(['/ticket']);
      },
      (error) => {
        console.error('Error adding ticket:', error);
        alert('Error adding ticket: ' + error.message);
      }
    );
  }

}
