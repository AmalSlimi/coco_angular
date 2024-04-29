import { Component } from '@angular/core';
import { Reclamation } from '../model/Reclamation';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-allreclamations',
  templateUrl: './allreclamations.component.html',
  styleUrls: ['./allreclamations.component.scss']
})
export class AllreclamationsComponent {
  reclamations: Reclamation[] = [];
  error: string | null = null;

  constructor(private reclamationService: ReclamationService) { }

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
}
