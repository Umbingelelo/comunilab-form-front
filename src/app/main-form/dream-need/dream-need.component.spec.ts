import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamNeedComponent } from './dream-need.component';

describe('DreamNeedComponent', () => {
  let component: DreamNeedComponent;
  let fixture: ComponentFixture<DreamNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreamNeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
