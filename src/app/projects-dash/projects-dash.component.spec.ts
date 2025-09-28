import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDashComponent } from './projects-dash.component';

describe('ProjectsDashComponent', () => {
  let component: ProjectsDashComponent;
  let fixture: ComponentFixture<ProjectsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
