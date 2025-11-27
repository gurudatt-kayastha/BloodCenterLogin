import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { OktaLoginComponent } from './okta-login/okta-login';

export const routes: Routes = [
    { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login', component: OktaLoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
