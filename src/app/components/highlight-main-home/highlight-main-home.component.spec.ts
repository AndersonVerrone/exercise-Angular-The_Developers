import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMainHomeComponent } from './highlight-main-home.component';

describe('HighlightMainHomeComponent', () => {
  let component: HighlightMainHomeComponent;
  let fixture: ComponentFixture<HighlightMainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightMainHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightMainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
