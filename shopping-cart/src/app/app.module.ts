import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/public/homeg/home/home.component';

import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { SuccessComponent } from './success/success.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/public/login/login.component';
import { FooterComponent } from './pages/public/footer/footer.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { HomegComponent } from './pages/public/homeg/homeg.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PaymentComponent, SuccessComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    HomegComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
