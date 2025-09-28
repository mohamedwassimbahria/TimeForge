import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeForgePredectionComponent } from './time-forge-predection.component';

describe('TimeForgePredectionComponent', () => {
  let component: TimeForgePredectionComponent;
  let fixture: ComponentFixture<TimeForgePredectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeForgePredectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeForgePredectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
