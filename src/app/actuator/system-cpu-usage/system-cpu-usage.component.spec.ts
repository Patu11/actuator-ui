import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCpuUsageComponent } from './system-cpu-usage.component';

describe('SystemCpuUsageComponent', () => {
  let component: SystemCpuUsageComponent;
  let fixture: ComponentFixture<SystemCpuUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemCpuUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemCpuUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
