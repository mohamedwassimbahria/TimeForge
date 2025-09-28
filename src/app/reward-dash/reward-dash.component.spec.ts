import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardDashComponent } from './reward-dash.component';

describe('RewardDashComponent', () => {
  let component: RewardDashComponent;
  let fixture: ComponentFixture<RewardDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
