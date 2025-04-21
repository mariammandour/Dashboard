import { Component } from '@angular/core';
import { AnalyticsService } from '../../../services/analytics.service';
import { AnalyticsMetrics } from '../../../interfaces/analytics.interface';

@Component({
  selector: 'app-analytics-cards',
  templateUrl: './analytics-cards.component.html',
  styleUrl: './analytics-cards.component.scss'
})
export class AnalyticsCardsComponent {
  metrics!: AnalyticsMetrics;
  loading = true;
  error: string | null = null;
  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.analyticsService.getMetrics().subscribe({
      next: (data) => {
        this.metrics = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }
}
