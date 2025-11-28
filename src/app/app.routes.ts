import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { OktaLoginComponent } from './okta-login/okta-login';
import { OktaPasswordComponent } from './okta-password/okta-password.component';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'okta-login', component: OktaLoginComponent },
  { path: 'okta-password', component: OktaPasswordComponent },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: 'login' }
];
