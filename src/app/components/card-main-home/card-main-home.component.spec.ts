import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainHomeComponent } from './card-main-home.component';

describe('CardMainHomeComponent', () => {
  let component: CardMainHomeComponent;
  let fixture: ComponentFixture<CardMainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMainHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
