import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementDashboard } from './placement-dashboard';

describe('PlacementDashboard', () => {
  let component: PlacementDashboard;
  let fixture: ComponentFixture<PlacementDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
