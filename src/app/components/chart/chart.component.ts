import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexTooltip,
  ApexYAxis,
  ApexFill,
  ApexGrid,
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis;
  fill: ApexFill;
  grid: ApexGrid;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: ChartOptions;
  public selectedRange: 'D' | 'W' | 'M' = 'W';

  constructor() {
    this.updateChart(this.selectedRange);
  }
  updateChart(range: 'D' | 'W' | 'M') {
    this.selectedRange = range;
    let data: number[] = [];
    let categories: string[] = [];

    switch (range) {
      case 'D':
        data = [
          0, 40000, 50000, 20000, 50000, 65000, 70000, 0, 40000, 50000, 20000,
          50000,
        ];
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
        data = [0, 10000, 50000, 20000, 50000, 65000, 70000];
        categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        break;
      case 'M':
        data = [
          0, 100000, 500000, 20000, 50000, 65000, 70000, 50000, 65000, 70000,
          65000, 70000,
        ];
        categories = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        break;
    }

    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: data,
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            fontSize: '14px',
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (val) => `$${val / 1000}k`,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 6,
        colors: ['#fff'],
        strokeWidth: 3,
        hover: {
          size: 8,
        },
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val.toLocaleString()}`,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.0,
          stops: [0, 90, 100],
        },
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['transparent'],
          opacity: 0.5,
        },
      },
    };
  }
}
