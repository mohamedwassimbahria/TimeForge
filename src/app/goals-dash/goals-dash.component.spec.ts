import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsDashComponent } from './goals-dash.component';

describe('GoalsDashComponent', () => {
  let component: GoalsDashComponent;
  let fixture: ComponentFixture<GoalsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
