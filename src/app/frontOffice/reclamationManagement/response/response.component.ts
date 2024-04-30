import { Component } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent {
  response = { message: '' };
  reclamationId!: number;

  constructor(
    private reclamationService: ReclamationService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reclamationId = +this.route.snapshot.params['id'];
  }

  submitResponse(): void {
    if (!this.response.message) {
      alert('Response message is required');
      return;
    }
    this.reclamationService.sendResponse(this.reclamationId, this.response).subscribe({
      next: () => {
        alert('Response submitted successfully');
        this.router.navigate(['/allReclamations']);
      },
      error: error => console.error('Error submitting response:', error)
    });
  }
  
}
