import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceDashComponent } from './workspace-dash.component';

describe('WorkspaceDashComponent', () => {
  let component: WorkspaceDashComponent;
  let fixture: ComponentFixture<WorkspaceDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspaceDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
