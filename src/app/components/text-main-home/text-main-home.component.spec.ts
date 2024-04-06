import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMainHomeComponent } from './text-main-home.component';

describe('TextMainHomeComponent', () => {
  let component: TextMainHomeComponent;
  let fixture: ComponentFixture<TextMainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextMainHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextMainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
