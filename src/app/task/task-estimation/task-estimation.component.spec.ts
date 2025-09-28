import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEstimationComponent } from './task-estimation.component';

describe('TaskEstimationComponent', () => {
  let component: TaskEstimationComponent;
  let fixture: ComponentFixture<TaskEstimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEstimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
