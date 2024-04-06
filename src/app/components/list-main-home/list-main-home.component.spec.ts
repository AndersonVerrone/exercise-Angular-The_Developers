import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainHomeComponent } from './list-main-home.component';

describe('ListMainHomeComponent', () => {
  let component: ListMainHomeComponent;
  let fixture: ComponentFixture<ListMainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMainHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
