import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursoftwareExpertiseComponent } from './oursoftware-expertise.component';

describe('OursoftwareExpertiseComponent', () => {
  let component: OursoftwareExpertiseComponent;
  let fixture: ComponentFixture<OursoftwareExpertiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OursoftwareExpertiseComponent]
    });
    fixture = TestBed.createComponent(OursoftwareExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
