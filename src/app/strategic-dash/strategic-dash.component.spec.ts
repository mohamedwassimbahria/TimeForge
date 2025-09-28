import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicDashComponent } from './strategic-dash.component';

describe('StrategicDashComponent', () => {
  let component: StrategicDashComponent;
  let fixture: ComponentFixture<StrategicDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategicDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategicDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
