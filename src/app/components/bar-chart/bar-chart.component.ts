import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ApexFill,
  ApexDataLabels,
  ApexGrid,
  ApexTooltip,
  ApexLegend,
  ChartComponent,
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  legend: ApexLegend;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: ChartOptions;
  public selectedRange: 'D' | 'W' = 'W';

  constructor() {
    this.updateChart(this.selectedRange);
  }

  updateChart(range: 'D' | 'W') {
    this.selectedRange = range;
    let data = [];
    let categories = [];

    switch (range) {
      case 'D':
        data = [5, 8, 4, 7, 2, 6, 9, 3, 1, 4, 5, 8];
        categories = [
          '1AM',
          '2AM',
          '3AM',
          '4AM',
          '5AM',
          '6AM',
          '7AM',
          '8AM',
          '9AM',
          '10AM',
          '11AM',
          '12PM',
        ];
        break;
      case 'W':
        data = [50, 80, 55, 30, 70, 20, 10];
        categories = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        break;
    }

    this.chartOptions = {
      series: [
        {
          name: 'Visits',
          data,
        },
      ],
      chart: {
        type: 'bar',
        height: 300,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '40%',
          distributed: true,
        },
      },
      xaxis: {
        categories,
        labels: {
          style: {
            fontSize: '14px',
          },
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        colors: ['#2563EB'],
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: (val) => `${val} visits`,
        },
      },
      legend: {
        show: false,
      },
    };
  }
}
