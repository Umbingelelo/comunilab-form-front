import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYouFormComponent } from './about-you-form.component';

describe('AboutYouFormComponent', () => {
  let component: AboutYouFormComponent;
  let fixture: ComponentFixture<AboutYouFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutYouFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutYouFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
