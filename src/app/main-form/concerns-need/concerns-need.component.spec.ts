import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcernsNeedComponent } from './concerns-need.component';

describe('ConcernsNeedComponent', () => {
  let component: ConcernsNeedComponent;
  let fixture: ComponentFixture<ConcernsNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcernsNeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcernsNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
