import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsManagementDashComponent } from './projects-management-dash.component';

describe('ProjectsManagementDashComponent', () => {
  let component: ProjectsManagementDashComponent;
  let fixture: ComponentFixture<ProjectsManagementDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsManagementDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsManagementDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
