import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-okta-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './okta-password.component.html',
  styleUrls: ['./okta-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OktaPasswordComponent {
  form: FormGroup;
  username: string;

  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    // read username from navigation state (from first page)
    this.username =
      this.router.getCurrentNavigation()?.extras.state?.['username'] ??
      'user@example.com'; // fallback if someone refreshes

    this.form = this.fb.group({
      password: ['', Validators.required]
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  onVerify() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const password = this.form.value.password;
    console.log('Verify with Okta here', { username: this.username, password });

    // TODO: call real Okta or navigate to dashboard route
    // this.router.navigate(['/dashboard']);
  }

  backToSignIn() {
    this.router.navigate(['/okta-login']);
  }
}
