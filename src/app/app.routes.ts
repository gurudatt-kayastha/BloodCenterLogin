import { Routes } from '@angular/router';
import { OktaLoginComponent } from './okta-login/okta-login';

export const routes: Routes = [
  { path: 'login', component: OktaLoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];