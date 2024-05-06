import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/backOffice/userManagement/service/auth.service';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../model/Reclamation';
import { ReclamationType } from '../model/ReclamationType';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent {
  reclamation: Reclamation = new Reclamation(); 
  message: string = '';
  reclamationTypes = Object.values(ReclamationType).filter(value => typeof value === 'string');
  containsBadWords: boolean = false;
  badWords = ['ffff', 'bbbb', 'shit'];


  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router,
    private toastr: ToastrService
  ) {  }

  ngOnInit(): void {
    this.reclamation.date = new Date().toISOString(); 
  }

  checkForBadWords(text: string) {
    const regex = new RegExp(this.badWords.join('|'), 'gi');
    this.containsBadWords = regex.test(text);
  }  

onSubmit() {
  this.reclamationService.addReclamation(this.reclamation).subscribe({
    next: (data) => {
      this.toastr.success('Your reclamation has been sent to the admin.', 'Submission Successful!', {
        timeOut: 10000, 
        progressBar: true,
        toastClass: 'custom-toast',
        positionClass: 'toast-top-right',  
        titleClass: 'toast-title',  
        messageClass: 'toast-message'
      });
      this.router.navigate(['/myReclamation']); 
      this.reclamation = new Reclamation();
    },
    error: (error) => {
      this.toastr.error('Failed to add reclamation', 'Error');
      console.error(error);
    }
  });
}

  

  navigateToMyReclamations() {
    this.router.navigate(['/myReclamation']);
  }
}
