import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/backOffice/userManagement/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  token: string;  // Token captured from the URL

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.token = this.activatedRoute.snapshot.params['passwordResetToken'];
  }

  resetPassword() {
    const newPassword = this.resetForm.get('newPassword')?.value;
    if (newPassword) {
      this.authService.resetPassword(this.token, newPassword).subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Password Reset Successfully',
            text: 'You can now login with your new password.'
          });
          this.router.navigate(['/login']);
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Failed to Reset Password',
            text: 'Please try again or contact support if the problem persists.'
          });
        }
      });
    }
  }
}
