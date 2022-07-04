import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataFlexComponent } from './weather-data-flex.component';

describe('WeatherDataFlexComponent', () => {
  let component: WeatherDataFlexComponent;
  let fixture: ComponentFixture<WeatherDataFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDataFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDataFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
