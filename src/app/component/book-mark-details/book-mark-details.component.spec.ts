import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMarkDetailsComponent } from './book-mark-details.component';

describe('BookMarkDetailsComponent', () => {
  let component: BookMarkDetailsComponent;
  let fixture: ComponentFixture<BookMarkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMarkDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
