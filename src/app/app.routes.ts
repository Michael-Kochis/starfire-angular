import { Routes } from '@angular/router';  

import { authGuard } from './service/auth-service/auth-guard';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page'; 
import { ShipyardPage } from './pages/shipyard-page/shipyard-page';

export const routes: Routes = [
    {path: 'login', component: LoginPage},
    {path: 'register', component: RegisterPage },
    {path: 'shipyard', component: ShipyardPage, canActivate: [authGuard] },
    {path: '', component: LoginPage }
];
