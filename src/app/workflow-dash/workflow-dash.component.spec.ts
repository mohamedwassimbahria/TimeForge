import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDashComponent } from './workflow-dash.component';

describe('WorkflowDashComponent', () => {
  let component: WorkflowDashComponent;
  let fixture: ComponentFixture<WorkflowDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
