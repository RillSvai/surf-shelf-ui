import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
];
