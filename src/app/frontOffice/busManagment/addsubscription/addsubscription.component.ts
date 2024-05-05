import { subscription } from '../model/subscription';
import { SubserviceService } from '../service/subservice.service';
import { QrCodeServiceService } from '../service/qr-code-service.service';
import { AudioService } from '../service/audio.service';

import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addsubscription',
  templateUrl: './addsubscription.component.html',
  styleUrls: ['./addsubscription.component.scss']
})
export class AddsubscriptionComponent implements OnDestroy {
  subscription: subscription = new subscription();
  subscriptionAdded: boolean = false;
  private navigationSubscription: Subscription;

  constructor(
    private router: Router,
    private subservice: SubserviceService,
    private audioservice: AudioService,
  ) {
    this.navigationSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("Navigation ended");
        this.audioservice.stopSound();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    const soundUrl = "assets/frontOffice/sub.mp3";
    this.audioservice.playSound(soundUrl);
  }

  addSubscription(): void {
    this.subservice.addSubscription(this.subscription).subscribe(
      (data) => {
        console.log('Subscription added successfully:', data);
        this.subscriptionAdded = true;
        // Navigate to the subscription page after successful addition
        this.router.navigate(['/sub']);
      },
      (error) => {
        console.error('Error adding subscription:', error);
        // Show an alert in case of error
        alert('Error adding subscription: ' + error);
      }
    );
  }
}
