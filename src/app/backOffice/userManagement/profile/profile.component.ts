import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserSService } from '../service/user-s.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: any = {}; 
  currentPassword: string = '';
  newPassword: string = '';
  renewPassword: string = '';

  constructor(private userService: UserSService) { }

  ngOnInit(): void {
    this.userService.getMyProfile().subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (error) => {
        console.error('Error fetching profile', error);
      }
    });
  }

  updateProfile(): void {
    this.userService.updateProfile(this.user).subscribe({
      next: () => {
        Swal.fire('Success', 'Profile updated successfully', 'success');
      },
      error: (error) => {
        console.error('Error updating profile', error);
        Swal.fire('Error', 'There was a problem updating the profile', 'error');
      }
    });
  }

  onFileChange(event: Event) {
  const element = event.currentTarget as HTMLInputElement;
  let fileList: FileList | null = element.files;
  if (fileList && fileList.length > 0) {
    const file = fileList[0];
    // Handle the file, for example by uploading it and setting user.pictureUrl to the file URL
  }
}

changePassword(): void {
  if (this.newPassword !== this.renewPassword) {
    Swal.fire('Error', 'New passwords do not match!', 'error');
    return;
  }
  const changePasswordRequest = {
    email: this.user.email, // Ensure this contains the correct email
    oldPassword: this.currentPassword,
    newPassword: this.newPassword
  };

  this.userService.changePassword(changePasswordRequest).subscribe({
    next: () => Swal.fire('Success', 'Password changed successfully!', 'success'),
    error: (error) => Swal.fire('Success', 'Password changed successfully!', 'success')
  });
}




}
