import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-okta-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './okta-login.component.html',
  styleUrls: ['./okta-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OktaLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      keepSignedIn: [false]
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, keepSignedIn } = this.loginForm.value;

    // 🔗 Hook your Okta redirect / widget call here
    console.log('Submit to Okta', { username, keepSignedIn });
  }
}