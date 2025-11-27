import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {

  constructor(private router: Router) {}

  onSignIn() {
    // Navigate to next page
    this.router.navigate(['/home']);
  }
}
