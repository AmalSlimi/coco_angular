import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ticket } from '../model/ticket';
import { StripeComponent } from '../stripe/stripe.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../service/ticket.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { subscription } from '../model/subscription';
import { User } from 'src/app/MarketPlace/user';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { QrCodeServiceService } from '../service/qr-code-service.service';
import { AudioService } from '../service/audio.service';
import { number } from 'echarts';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  listTicket: ticket[] = [];
  stripeComponent: StripeComponent;
  userId!: number;
  @ViewChild('content') content!: ElementRef;
  ticketForm!: FormGroup;
  selectedticket: ticket | null = null;
  @ViewChild('ticketContainer') ticketContainer!: ElementRef;
  securityCodeVisible = false;



  constructor(
    private ticketservice: TicketService,
    private qrservice: QrCodeServiceService,
    private audioservice: AudioService,

    private http: HttpClient,
    private ac: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.stripeComponent = new StripeComponent(http, ac, router);
  }

  ngOnInit() {

    this.userId = 9999999;
    this.loadTicket(this.userId);
    this.initializeForm();
    this.audioservice.stopSound();

  }
  loadTicket(userId: number) {
    this.ticketservice.getDetailticket(userId).subscribe({
      next: (data: ticket) => {
        this.listTicket = [data];
      },
      error: (error) => console.error(error),
      complete: () => console.log('Ticket loaded successfully')
    });
  }
  removeTicket(ticketId: number): void {
    this.ticketservice.removeTicket(ticketId).subscribe(
      () => {

        this.loadTicket(this.userId);
        this.router.navigate(['/utrip']);
      },
      (error) => {
        console.error('Error removing ticket:', error);
        alert('Error removing ticket: ' + error);
      }
    );
  }
  payTicket(ticket: ticket): void {
    if (ticket.status === 'EXPIRED') {
      this.stripeComponent.amount = ticket.price * 100;



      const paymentPromise = new Promise<boolean>((resolve) => {

        this.stripeComponent.pay();
        resolve(true);
      });


      paymentPromise.then((paymentSuccessful: boolean) => {
        if (paymentSuccessful) {
          ticket.status = 'ACTIVE';

          this.ticketservice.updateTicketStatus(ticket.id, 'ACTIVE').subscribe(
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
  generatePDF(): void {
    const ticketContainer = this.ticketContainer.nativeElement.querySelector('.pdf-ticket');
    if (ticketContainer) {
      html2canvas(ticketContainer).then(canvas => {
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('ticket.pdf');
      });
    } else {
      alert('Error: No ticket details found.');
    }
  }



  initializeForm(): void {
    // Initialisation du formulaire avec FormBuilder
    this.ticketForm = this.fb.group({
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
    this.ticketForm.patchValue({ cardNumber });
  }
  validateCardNumber(control: any): { [key: string]: any } | null {
    const cardNumber = control.value;
    if (cardNumber && cardNumber.replace(/\D/g, '').length !== 16) {
      return { 'invalidLength': true };
    }
    return null;
  }
  isInvalidControl(controlName: string): boolean {
    const control = this.ticketForm.get(controlName);
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

  openPaymentModal(ticket: ticket): void {
    this.selectedticket = ticket;
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
  selectsub(ticket: ticket): void {
    this.selectedticket= ticket;
  }
  toggleSecurityVisibility(): void {
    this.securityCodeVisible = !this.securityCodeVisible;
  }
  generateQrCode(ticket: ticket): void {
    if (ticket.status === 'ACTIVE' && ticket.qrCodeData2) {
      this.qrservice.generateQrCode(ticket.qrCodeData2).subscribe(
        (qrCodeBlob: Blob) => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            ticket.qrCodeImageUrl2 = event.target.result;
          };
          reader.readAsDataURL(qrCodeBlob);
        },
        (error) => {
          console.error('Error generating QR code:', error);
          alert('Error generating QR code: ' + error); // Alert error message
        }
      );
    } else {
      alert('Subscription is not ACTIVE or QR code data is missing. Cannot generate QR code.'); // Alert subscription status or missing data
    }
  }

}
