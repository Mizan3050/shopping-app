import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { CartComponent } from './cart/cart.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    SharedModule,
    BrowserTransferStateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
