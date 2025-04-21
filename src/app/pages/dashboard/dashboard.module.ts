import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsCardsComponent } from './analytics-cards/analytics-cards.component';
import { CardModule } from '../../components/card/card.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsCardsComponent
  ],
  imports: [
    CommonModule,
    CardModule
],
})
export class DashboardModule { }
