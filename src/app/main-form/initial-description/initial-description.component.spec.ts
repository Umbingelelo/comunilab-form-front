import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialDescriptionComponent } from './initial-description.component';

describe('InitialDescriptionComponent', () => {
  let component: InitialDescriptionComponent;
  let fixture: ComponentFixture<InitialDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
