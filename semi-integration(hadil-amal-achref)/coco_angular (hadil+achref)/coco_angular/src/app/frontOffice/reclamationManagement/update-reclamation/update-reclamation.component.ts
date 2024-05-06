import { Component } from '@angular/core';
import { Reclamation } from '../model/Reclamation';
import { ReclamationType } from '../model/ReclamationType';
import { ReclamationService } from '../reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.scss']
})
export class UpdateReclamationComponent {
  reclamation: Reclamation = new Reclamation();
  error: string | null = null;

  constructor(
    private reclamationService: ReclamationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReclamation();
  }

  getReclamation(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.reclamationService.getReclamationById(+id).subscribe({
        next: (reclamation) => {
          this.reclamation = reclamation;
        },
        error: (err) => {
          this.error = 'Failed to load reclamation';
          console.error(err);
        }
      });
    }
  }

  updateReclamation(): void {
    this.reclamationService.updateReclamation(this.reclamation).subscribe({
      next: () => {
        alert('Reclamation updated successfully');
        this.router.navigate(['/my-reclamations']);
      },
      error: (error) => {
        alert('Failed to update reclamation');
        console.error(error);
      }
    });
  }
}
