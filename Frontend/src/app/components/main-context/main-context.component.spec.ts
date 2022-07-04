import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContextComponent } from './main-context.component';

describe('MainContextComponent', () => {
  let component: MainContextComponent;
  let fixture: ComponentFixture<MainContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
