import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {
  clientSecret: string | null = null;
  amount: number = 100;
  url = "http://localhost:8085/spring2024/stripe";

  constructor(private http: HttpClient , private ac: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  pay() {
    this.http.post<any>(`${this.url}/stripe/${this.amount}`, {}).subscribe(data => {
      this.clientSecret = data;
      alert("Paiement réussi !");
    }, error => {
      console.error('Une erreur est survenue lors de la requête:', error);
      alert("Une erreur est survenue lors du paiement. Veuillez réessayer plus tard.");
    });
  }
}
