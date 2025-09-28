import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEstimateComponent } from './task-estimate.component';

describe('TaskEstimateComponent', () => {
  let component: TaskEstimateComponent;
  let fixture: ComponentFixture<TaskEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEstimateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
