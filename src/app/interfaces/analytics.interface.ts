export interface AnalyticsMetrics {
  totalRevenue: {
    value: number;
    percent: number;
  };
  dailyRevenue: {
    value: number;
    percent: number;
  };
  itemsSold: number;
  activeUsers: number;
}
