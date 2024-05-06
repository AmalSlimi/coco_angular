import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { subscription } from '../model/subscription';
import { SubserviceService } from '../service/subservice.service';
import { QrCodeServiceService } from '../service/qr-code-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeComponent } from '../stripe/stripe.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AudioService } from '../service/audio.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  listSub: subscription[] = [];
  stripeComponent: StripeComponent;

  @ViewChild('content') content!: ElementRef;
  subForm!: FormGroup;
  selectedsub: subscription | null = null;
  securityCodeVisible = false;



  constructor(
    private subservice: SubserviceService,
    private qrservice: QrCodeServiceService,
    private audioservice: AudioService,
    private http: HttpClient,
    private ac: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.stripeComponent = new StripeComponent(http, ac, router); // Create an instance of StripeComponent with dependencies
  }

  ngOnInit() {


    this.loadSubs();
    this.initializeForm();
    this.audioservice.stopSound();
  }

  loadSubs() {
    this.subservice.getDetailsub().subscribe({
      next: (data: subscription) => {
        this.listSub = [data]; // Assuming getDetailsub returns a single subscription
      },
      error: (error) => console.error(error),
      complete: () => console.log('Subs loaded successfully')
    });
  }


  generateQrCode(subscription: subscription): void {
    if (subscription.status === 'ACTIVE') {
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
          alert('Error generating QR code: ' + error);
        }
      );
    } else {
      alert('Subscription is not ACTIVE. Cannot generate QR code.');
    }
  }

  paySubscription(subscription: subscription): void {
    if (subscription.status === 'EXPIRED') {
      this.stripeComponent.amount = subscription.subscriptionPrice * 100;


      // Create a promise to handle the payment process
      const paymentPromise = new Promise<boolean>((resolve) => {
        // Call the payment method and resolve the promise with the payment result
        this.stripeComponent.pay();
        resolve(true); // Assuming payment is always successful for simplicity
      });

      // After the payment is resolved (assuming it's always successful)
      paymentPromise.then((paymentSuccessful: boolean) => {
        if (paymentSuccessful) {
          subscription.status = 'ACTIVE';
          // Update the subscription status to 'ACTIVE'
          this.subservice.updateSubscriptionStatus(subscription.id, 'ACTIVE').subscribe(
            () => {
              alert('Payment successful! Subscription status updated to ACTIVE.');
              this.closePaymentModal();
            },
            (error) => {
              console.error('Error updating subscription status:', error);
              alert('Payment successful, but failed to update subscription status.');
            }
          );
        } else {
          alert('Payment failed.');
        }
      });
    } else {
      alert('Payment failed: Subscription is not expired.');
    }
  }
  removeSubscription(subscriptionId: number): void {
    this.subservice.removeSub(subscriptionId).subscribe(
      () => {
        // Subscription removed successfully, update the list
        this.loadSubs();
      },
      (error) => {
        console.error('Error removing subscription:', error);
        alert('Error removing subscription: ' + error);
      }
    );
  }

  initializeForm(): void {
    // Initialisation du formulaire avec FormBuilder
    this.subForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.minLength(19), Validators.maxLength(19), this.validateCardNumber]],
      expirationDate: ['', [Validators.required, this.validateExpirationDate]],
      securityCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]{4}$')]]
    });
  }
  formatCardNumber(event: any): void {
    // Get the current value of the card number input
    let cardNumber = event.target.value;

    // Remove any non-digit characters from the input
    cardNumber = cardNumber.replace(/\D/g, '');

    // Add a space after every 4 digits using regex
    cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');


    // Update the form control with the formatted card number
    this.subForm.patchValue({ cardNumber });
  }
  validateCardNumber(control: any): { [key: string]: any } | null {
    const cardNumber = control.value;
    if (cardNumber && cardNumber.replace(/\D/g, '').length !== 16) {
      return { 'invalidLength': true };
    }
    return null;
  }
  isInvalidControl(controlName: string): boolean {
    const control = this.subForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  validateExpirationDate(control: any) {
    const expirationDate = control.value;
    if (!expirationDate || expirationDate.length !== 7 || expirationDate.indexOf('/') === -1) {
      return { 'invalidExpirationDate': true };
    }
    const [month, year] = expirationDate.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    if (isNaN(Number(month)) || isNaN(Number(year)) || Number(month) < 1 || Number(month) > 12 || Number(year) < currentYear || (Number(year) === currentYear && Number(month) < currentMonth)) {
      return { 'invalidExpirationDate': true };
    }
    return null;
  }

  openPaymentModal(subscription: subscription): void {
    this.selectedsub = subscription;
    const modal = document.getElementById('paymentModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closePaymentModal(): void {
    const modal = document.getElementById('paymentModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  selectsub(subscription: subscription): void {
    this.selectedsub = subscription;
  }
  toggleSecurityVisibility(): void {
    this.securityCodeVisible = !this.securityCodeVisible;
  }
}
