import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DividendsComponent } from './dividends/dividends.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { PortfoliosOverviewComponent } from './portfolios/portfolios-overview/portfolios-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DividendsComponent,
    HeaderComponent,
    LoginComponent,
    ErrorPageComponent,
    PortfoliosOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
