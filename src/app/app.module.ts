import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DividendsComponent } from './dividends/dividends.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { PortfoliosOverviewComponent } from './portfolios/portfolios-overview/portfolios-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioDetailsComponent } from './portfolios/portfolio-details/portfolio-details.component';
import { PositionComponent } from './portfolios/portfolio-details/position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    DividendsComponent,
    HeaderComponent,
    LoginComponent,
    ErrorPageComponent,
    PortfoliosOverviewComponent,
    PortfolioDetailsComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatGridListModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
