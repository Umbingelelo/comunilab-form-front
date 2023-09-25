import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationProjectComponent } from './information-project.component';

describe('InformationProjectComponent', () => {
  let component: InformationProjectComponent;
  let fixture: ComponentFixture<InformationProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
