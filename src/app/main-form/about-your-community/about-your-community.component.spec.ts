import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYourCommunityComponent } from './about-your-community.component';

describe('AboutYourCommunityComponent', () => {
  let component: AboutYourCommunityComponent;
  let fixture: ComponentFixture<AboutYourCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutYourCommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutYourCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
