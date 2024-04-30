import { Component } from '@angular/core';
import { Reclamation } from '../model/Reclamation';
import { ReclamationService } from '../reclamation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allreclamations',
  templateUrl: './allreclamations.component.html',
  styleUrls: ['./allreclamations.component.scss']
})
export class AllreclamationsComponent {
  reclamations: Reclamation[] = [];
  error: string | null = null;
  states = ['PENDING', 'RESOLVED', 'CLOSED','REVIEWED'];

  constructor(private reclamationService: ReclamationService, private router: Router) { }

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.reclamationService.getReclamations().subscribe({
      next: (reclamations) => {
        this.reclamations = reclamations;
      },
      error: (err) => {
        this.error = 'Failed to load reclamations';
        console.error(err);
      }
    });
  }

  deleteReclamation(id: number): void {
    if (confirm('Are you sure you want to delete this reclamation?')) {
      this.reclamationService.deleteReclamation(id).subscribe({
        next: () => {
          this.reclamations = this.reclamations.filter(reclamation => reclamation.id !== id);
          alert('Reclamation deleted successfully');
        },
        error: (err) => {
          alert('Failed to delete reclamation');
          console.error(err);
        }
      });
    }
  }

  updateState(reclamation: Reclamation): void {
    this.reclamationService.updateReclamationState(reclamation.id, reclamation.state).subscribe({
      next: () => {
        // Handle successful update
        alert('State updated successfully');
      },
      error: (error) => {
        // Handle error
        alert('Failed to update state');
        console.error(error);
      }
    });
  }
  respondToReclamation(id: number): void {
    this.router.navigate(['/response', id]); 
  }
}
