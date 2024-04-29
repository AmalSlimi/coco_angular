import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/backOffice/userManagement/service/auth.service';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../model/Reclamation';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent {
  reclamation: Reclamation = new Reclamation(); 
  message: string = '';
  


  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    
  ) {  }

  ngOnInit(): void {}

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

}
