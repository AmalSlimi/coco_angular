import { Component } from '@angular/core';
import { AuthService } from '../userManagement/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss']
})
export class HeaderBackComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    console.log('Attempting to logout...');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  

}
