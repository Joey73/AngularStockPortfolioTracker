import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { PortfoliosOverviewComponent } from './portfolios-overview/portfolios-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioDetailsComponent } from './portfolios-overview/portfolio/portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './portfolios-overview/portfolio/portfolio.component';
// tslint:disable-next-line:max-line-length
import { PortfolioDividendsComponent } from './portfolios-overview/portfolio/portfolio-details/portfolio-dividends/portfolio-dividends.component';
// tslint:disable-next-line:max-line-length
import { PortfolioPositionsComponent } from './portfolios-overview/portfolio/portfolio-details/portfolio-positions/portfolio-positions.component';
import { PortfolioTradesComponent } from './portfolios-overview/portfolio/portfolio-details/portfolio-trades/portfolio-trades.component';
import { PortfolioAnalysisComponent } from './portfolios-overview/portfolio/portfolio-analysis/portfolio-analysis.component';
import { ImportantRatiosComponent } from './portfolios-overview/portfolio/portfolio-analysis/important-ratios/important-ratios.component';
import { FydgvfyrgComponent } from './portfolios-overview/portfolio/portfolio-analysis/fydgvfyrg/fydgvfyrg.component';
import { PervfyigComponent } from './portfolios-overview/portfolio/portfolio-analysis/pervfyig/pervfyig.component';
import { SectorAndWeightComponent } from './portfolios-overview/portfolio/portfolio-analysis/sector-and-weight/sector-and-weight.component';
import { DyvdprComponent } from './portfolios-overview/portfolio/portfolio-analysis/dyvdpr/dyvdpr.component';
import { DyvfydgComponent } from './portfolios-overview/portfolio/portfolio-analysis/dyvfydg/dyvfydg.component';
import { DividendComponent } from './dividend/dividend.component';
import { DividendAccordionComponent } from './dividend/dividend-accordion/dividend-accordion.component';
import { DividendYearsComponent } from './dividend/dividend-accordion/dividend-years/dividend-years.component';
import { DividendTableComponent } from './dividend/dividend-accordion/dividend-years/dividend-table/dividend-table.component';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ErrorPageComponent,
    PortfoliosOverviewComponent,
    PortfolioDetailsComponent,
    PortfolioComponent,
    PortfolioDividendsComponent,
    PortfolioPositionsComponent,
    PortfolioTradesComponent,
    PortfolioAnalysisComponent,
    ImportantRatiosComponent,
    FydgvfyrgComponent,
    PervfyigComponent,
    SectorAndWeightComponent,
    DyvdprComponent,
    DyvfydgComponent,
    DividendComponent,
    DividendYearsComponent,
    DividendTableComponent,
    DividendAccordionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
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
    FlexLayoutModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
