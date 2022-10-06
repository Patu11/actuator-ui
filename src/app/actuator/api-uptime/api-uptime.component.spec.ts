import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUptimeComponent } from './api-uptime.component';

describe('ApiUptimeComponent', () => {
  let component: ApiUptimeComponent;
  let fixture: ComponentFixture<ApiUptimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUptimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
