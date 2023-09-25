import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialNeedComponent } from './initial-need.component';

describe('InitialNeedComponent', () => {
  let component: InitialNeedComponent;
  let fixture: ComponentFixture<InitialNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialNeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
