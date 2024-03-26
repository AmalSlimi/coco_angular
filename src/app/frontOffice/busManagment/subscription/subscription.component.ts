import { Component, OnInit } from '@angular/core';
import { subscription } from '../model/subscription';
import { SubserviceService } from '../service/subservice.service';
import { QrCodeServiceService } from '../service/qr-code-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeComponent } from '../stripe/stripe.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  listSub: subscription[] = [];
  stripeComponent: StripeComponent;

  constructor(
    private subservice: SubserviceService,
    private qrservice: QrCodeServiceService,
    private http: HttpClient,
    private ac: ActivatedRoute,
    private router: Router
  ) {
    this.stripeComponent = new StripeComponent(http, ac, router); // Create an instance of StripeComponent with dependencies
  }

  ngOnInit() {
    this.loadSubs();
  }

  loadSubs() {
    this.subservice.getAllSubscription().subscribe({
      next: (data: subscription[]) => {
        this.listSub = data;
      },
      error: (error) => console.error(error),
      complete: () => console.log('Subs loaded successfully')
    });
  }

  generateQrCode(subscription: subscription): void {
    this.qrservice.generateQrCode(subscription.qrCodeData).subscribe(
      (qrCodeBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          subscription.qrCodeImageUrl = event.target.result;
        };
        reader.readAsDataURL(qrCodeBlob);
      },
      (error) => {
        console.error('Error generating QR code:', error);
      }
    );
  }

  paySubscription(subscription: subscription): void {
    this.stripeComponent.amount = subscription.subscriptionPrice; // Set the amount
    this.stripeComponent.pay(); // Call the pay() method
  }
}
