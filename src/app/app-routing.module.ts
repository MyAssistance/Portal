import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Import dos formularios*/
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/esqueci-senha', pathMatch: 'full' },
  { 	path: 'login',
   		component: LoginComponent
  },
  { 	path: 'esqueci-senha',
   		component: ForgotPasswordComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
