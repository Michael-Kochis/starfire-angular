import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UserService } from '../../service/user-service/user-service';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  constructor(private userService: UserService) {}
  
  onLogoff() {
    this.userService.clearUser();
  }
}
