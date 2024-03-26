import { Component } from '@angular/core';
import { subscription } from '../model/subscription';
import { SubserviceService } from '../service/subservice.service';
import { QrCodeServiceService } from '../service/qr-code-service.service';

@Component({
  selector: 'app-addsubscription',
  templateUrl: './addsubscription.component.html',
  styleUrls: ['./addsubscription.component.scss']
})
export class AddsubscriptionComponent {
  subscription: subscription = new subscription();
  subscriptionAdded: boolean = false;
  qrCodeGenerated: boolean = false;

  constructor(
    private subservice: SubserviceService,
    private qrservice: QrCodeServiceService
  ) {}

  addSubscription(): void {
    this.subservice.addSubscription(1, this.subscription).subscribe(
      (data) => {
        console.log('Subscription added successfully:', data);
        this.subscriptionAdded = true;
      },
      (error) => {
        console.error('Error adding subscription:', error);
      }
    );
  }

  



}
