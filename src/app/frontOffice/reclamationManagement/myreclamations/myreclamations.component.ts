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

  
}
