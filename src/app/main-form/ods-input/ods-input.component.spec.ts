import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdsInputComponent } from './ods-input.component';

describe('OdsInputComponent', () => {
  let component: OdsInputComponent;
  let fixture: ComponentFixture<OdsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
