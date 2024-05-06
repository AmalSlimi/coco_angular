import { Component } from '@angular/core';
import { AuthService } from 'src/app/backOffice/userManagement/service/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  userEmail!: string;

  constructor(private authService: AuthService) {}

  submitEmail() {
    
    if (this.userEmail) {
      this.authService.forgetPassword(this.userEmail).subscribe({
        next: (response) => {
          alert('If the email is associated with an account, a reset link has been sent.');
        },
        error: (error) => {
          console.error('Error sending forget password email:', error);
          alert('There was an error processing your request.');
        }
      });
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
