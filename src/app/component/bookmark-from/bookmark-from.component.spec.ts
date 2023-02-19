import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFromComponent } from './bookmark-from.component';

describe('BookmarkFromComponent', () => {
  let component: BookmarkFromComponent;
  let fixture: ComponentFixture<BookmarkFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmarkFromComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
