import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentImgComponent } from './content-img.component';

describe('ContentImgComponent', () => {
  let component: ContentImgComponent;
  let fixture: ComponentFixture<ContentImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentImgComponent]
    });
    fixture = TestBed.createComponent(ContentImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
