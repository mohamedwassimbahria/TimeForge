import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEstimateComponent } from './project-estimate.component';

describe('ProjectEstimateComponent', () => {
  let component: ProjectEstimateComponent;
  let fixture: ComponentFixture<ProjectEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectEstimateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
