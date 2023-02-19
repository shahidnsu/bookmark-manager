import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMarkViewComponent } from './book-mark-view.component';

describe('BookMarkViewComponent', () => {
  let component: BookMarkViewComponent;
  let fixture: ComponentFixture<BookMarkViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMarkViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMarkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
