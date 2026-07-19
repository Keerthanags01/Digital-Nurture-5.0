import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementDashboard } from './achievement-dashboard';

describe('AchievementDashboard', () => {
  let component: AchievementDashboard;
  let fixture: ComponentFixture<AchievementDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
