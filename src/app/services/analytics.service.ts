import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, throwError } from 'rxjs';
import { AnalyticsMetrics } from '../interfaces/analytics.interface';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  getMetrics(): Observable<AnalyticsMetrics> {
    const mockData = {
      totalRevenue: {
        value: 52.6,
        percent: 3.4,
      },
      dailyRevenue: {
        value: 1024,
        percent: -5.5,
      },
      itemsSold: 22,
      activeUsers: 11,
    };

    return of(mockData).pipe(
      delay(100),
      catchError((error) => {
        console.error('Failed to fetch metrics', error);
        return throwError(() => new Error('Failed to fetch metrics'));
      })
    );
  }
}
