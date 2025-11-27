import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-okta-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './okta-login.component.html',
  styleUrls: ['./okta-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OktaLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      keepSignedIn: [false]
    });
  }

  onNext(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const username = this.loginForm.value.username;

    // 👉 Go to password page and pass username
    this.router.navigate(['/okta-password'], {
      state: { username }
    });
  }
}