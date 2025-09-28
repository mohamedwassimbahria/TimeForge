import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPredictComponent } from './reward-predict.component';

describe('RewardPredictComponent', () => {
  let component: RewardPredictComponent;
  let fixture: ComponentFixture<RewardPredictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardPredictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
