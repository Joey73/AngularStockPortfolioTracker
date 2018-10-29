import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { DividendComponent } from './dividend/dividend.component';
import { PortfoliosOverviewComponent } from './portfolios-overview/portfolios-overview.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'portfolios-overview', component: PortfoliosOverviewComponent },
  { path: 'dividends', component: DividendComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
