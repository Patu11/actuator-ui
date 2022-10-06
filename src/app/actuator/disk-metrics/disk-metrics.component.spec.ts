import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskMetricsComponent } from './disk-metrics.component';

describe('DiskMetricsComponent', () => {
  let component: DiskMetricsComponent;
  let fixture: ComponentFixture<DiskMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiskMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
