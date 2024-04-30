import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/backOffice/userManagement/service/auth.service';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../model/Reclamation';
import { ReclamationType } from '../model/ReclamationType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent {
  reclamation: Reclamation = new Reclamation(); 
  message: string = '';
  reclamationTypes = Object.values(ReclamationType).filter(value => typeof value === 'string');



  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.reclamation.date = new Date().toISOString(); 
  }

  onSubmit() {
    this.reclamationService.addReclamation(this.reclamation).subscribe({
      next: (data) => {
        this.message = 'Reclamation added successfully!';
        console.log(data);
        
      },
      error: (error) => {
        this.message = 'Failed to add reclamation';
        console.error(error);
      }
    });
  }

  navigateToMyReclamations() {
    this.router.navigate(['/myReclamation']);
  }
}
