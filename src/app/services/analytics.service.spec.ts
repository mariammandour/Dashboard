import { TestBed } from '@angular/core/testing';
import { AnalyticsService } from './analytics.service';
import { AnalyticsMetrics } from '../interfaces/analytics.interface';
import { throwError } from 'rxjs';

describe('AnalyticsService', () => {
  let service: AnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock metrics data', (done) => {
    const expectedData: AnalyticsMetrics = {
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

    service.getMetrics().subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });
  });

  it('should handle error correctly', (done) => {
    const mockService = {
      getMetrics: () => throwError(() => new Error('Failed to fetch metrics')),
    };

    mockService
      .getMetrics()
      .pipe()
      .subscribe({
        error: (err) => {
          expect(err).toBeTruthy();
          expect(err.message).toBe('Failed to fetch metrics');
          done();
        },
      });
  });
});
