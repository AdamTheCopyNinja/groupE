import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/homeg/home/home.component';
import { HomegComponent } from './pages/public/homeg/homeg.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: '',
    component: HomegComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
