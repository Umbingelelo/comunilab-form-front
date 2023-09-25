import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthsNeedComponent } from './strengths-need.component';

describe('StrengthsNeedComponent', () => {
  let component: StrengthsNeedComponent;
  let fixture: ComponentFixture<StrengthsNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthsNeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthsNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
