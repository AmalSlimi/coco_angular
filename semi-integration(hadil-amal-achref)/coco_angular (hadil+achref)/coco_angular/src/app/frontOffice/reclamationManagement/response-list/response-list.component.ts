import { Component } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import { Response } from '../model/Response';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.scss']
})
export class ResponseListComponent {
  responses: Response[] = [];
  error: string | null = null;

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.loadResponses();
  }

  loadResponses(): void {
    this.reclamationService.getAllResponses().subscribe({
      next: (responses) => {
        this.responses = responses;
      },
      error: (error) => {
        this.error = 'Failed to load responses';
        console.error(error);
      }
    });
  }
  deleteResponse(responseId: number): void {
    if (confirm('Are you sure you want to delete this response?')) {
      this.reclamationService.deleteResponse(responseId).subscribe(
        () => {
          this.responses = this.responses.filter(response => response.id !== responseId);
          alert('Response deleted successfully');
        },
        error => {
          alert('Failed to delete response');
          console.error('Error deleting response:', error);
        }
      );
    }
  }
}
