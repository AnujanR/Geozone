import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Next5SingleComponent } from './next5-single.component';

describe('Next5SingleComponent', () => {
  let component: Next5SingleComponent;
  let fixture: ComponentFixture<Next5SingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Next5SingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Next5SingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
