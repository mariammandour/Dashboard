import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsCardsComponent } from './analytics-cards/analytics-cards.component';
import { CardModule } from '../../components/card/card.module';
import { ChartModule } from '../../components/chart/chart.module';
import { BarChartModule } from '../../components/bar-chart/bar-chart.module';

@NgModule({
  declarations: [DashboardComponent, AnalyticsCardsComponent],
  imports: [CommonModule, CardModule, ChartModule, BarChartModule],
})
export class DashboardModule {}
