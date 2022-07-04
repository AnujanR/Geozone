import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataContainerComponent } from './weather-data-container.component';

describe('WeatherDataContainerComponent', () => {
  let component: WeatherDataContainerComponent;
  let fixture: ComponentFixture<WeatherDataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDataContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
