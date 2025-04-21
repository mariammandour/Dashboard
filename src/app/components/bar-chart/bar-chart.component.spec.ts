import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarChartComponent],
      imports:[NgApexchartsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
