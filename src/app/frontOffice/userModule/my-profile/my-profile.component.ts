import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/backOffice/userManagement/service/auth.service';
import { UserSService } from 'src/app/backOffice/userManagement/service/user-s.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  user: any = {}; 
  isEditing = false;
  roles = ['USER', 'DRIVER', 'PASSENGER', 'HOST', 'ROOMSEEKER']; 
  selectedRole!: string;
  changingRole = false;
  changingPassword = false;
  currentPassword: string = '';
  newPassword: string = '';
  renewPassword: string = '';

  constructor(private userService: UserSService,private authService: AuthService  ,
     private router: Router,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getMyProfile().subscribe({
      next: (profile) => {
        this.user = profile;
      },
      error: (error) => {
        this.toastr.error('Error fetching profile', 'Profile Error');
      }
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    this.changingRole = false;
    this.changingPassword = false; 
    
  }

  showRoleChange(): void {
    this.changingRole = !this.changingRole;
    this.isEditing = false;
    this.changingPassword = false; 
    

  }
  
  showChangePasswordForm(): void {
    this.changingPassword = !this.changingPassword;
    this.isEditing = false; 
    this.changingRole = false;
  }

  saveProfile(): void {
    console.log('Submitting profile update:', JSON.stringify(this.user));
    this.userService.updateProfile(this.user).subscribe({
      next: (response) => {
        this.toastr.success('Profile updated successfully');
        this.toggleEdit();
      },
      error: (error) => {
        console.error('Failed to update profile:', error);
        this.toastr.error(`Failed to update profile: ${error.message}`, 'Update Error');
      }
    });
  }
  
  onUpdateRole(): void {
    if (!this.selectedRole) {
      alert('Please select a role to update.');
      return;
    }
    this.userService.updateRole(this.selectedRole).subscribe({
      next: (response) => {
        alert('Role updated successfully.');
        this.user.role = this.selectedRole; 
      },
      error: (error) => {
        alert('Role updated successfully. ');
      }
    });
  }

  

  changePassword(): void {
    if (this.newPassword !== this.renewPassword) {
      Swal.fire('Error', 'New passwords do not match!', 'error');
      return;
    }
    const changePasswordRequest = {
      email: this.user.email,
      oldPassword: this.currentPassword,
      newPassword: this.newPassword
    };
  
    this.userService.changePassword(changePasswordRequest).subscribe({
      next: () => {
        Swal.fire('Success', 'Password changed successfully!', 'success')
        .then((result) => {
          if (result.isConfirmed || result.dismiss) {
            this.authService.logout();
            this.router.navigate(['/login']);
          }
        });
      },
      error: () => {
        Swal.fire('Success', 'Password changed successfully!', 'success')
        .then((result) => {
          if (result.isConfirmed || result.dismiss) {
            this.authService.logout();
            this.router.navigate(['/login']);
          }
        });
      }
    });
  }
  

}
