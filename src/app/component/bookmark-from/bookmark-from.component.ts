import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharingBookMarkService } from '../../service/sharing-book-mark.service';
@Component({
  selector: 'app-bookmark-from',
  templateUrl: './bookmark-from.component.html',
  styleUrls: ['./bookmark-from.component.css'],
})
export class BookmarkFromComponent {
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private bookMarkService: SharingBookMarkService
  ) { }

  //here i need to make the changes
  catergory = ['A', 'B', 'C', 'D'];
  bookMarkForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(30)]],
    url: ['', Validators.required],
    category: ['', Validators.required],
  });
  backToHome() {
    this.route.navigate(['']);
  }

  onSubmit() {
    localStorage.setItem(
      JSON.stringify(this.bookMarkForm.value.title),
      JSON.stringify(this.bookMarkForm.value)
    );
    this.bookMarkService.bookMarksObj.push(this.bookMarkForm.value);
    this.route.navigate(['']);
  }
}
