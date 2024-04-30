import { Component } from '@angular/core';
import { Reclamation } from '../model/Reclamation';
import { ReclamationService } from '../reclamation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myreclamations',
  templateUrl: './myreclamations.component.html',
  styleUrls: ['./myreclamations.component.scss']
})
export class MyreclamationsComponent {
  myReclamations: Reclamation[] = [];
  error: string | null = null;

  constructor(private reclamationService: ReclamationService,private router: Router ) { }

  ngOnInit(): void {
    this.loadMyReclamations();
  }

  loadMyReclamations(): void {
    this.reclamationService.getMyReclamations().subscribe({
      next: (reclamations) => {
        this.myReclamations = reclamations;
      },
      error: (err) => {
        this.error = 'Failed to load reclamations';
        console.error(err);
      }
    });
  }

  editReclamation(id: number): void {
    this.router.navigate(['/update-reclamation', id]);
}

deleteReclamation(id: number): void {
  if(confirm('Are you sure you want to delete this reclamation?')) {
    this.reclamationService.deleteReclamation(id).subscribe({
      next: () => {
        this.myReclamations = this.myReclamations.filter(reclamation => reclamation.id !== id);
        alert('Reclamation deleted successfully');
      },
      error: (error) => {
        alert('Failed to delete reclamation');
        console.error(error);
      }
    });
  }
}  

toggleResponses(reclamation: Reclamation): void {
  if (!reclamation.responses) {
    this.reclamationService.getResponsesByReclamation(reclamation.id).subscribe({
      next: (responses) => {
        reclamation.responses = responses;
        if (responses.length === 0) {
          alert('No responses available for this reclamation.');
        }
      },
      error: (err) => {
        console.error('Failed to load responses', err);
        alert('Failed to load responses');
      }
    });
  } else {
    delete reclamation.responses; 
  }
}
}
