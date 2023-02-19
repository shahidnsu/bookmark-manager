import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-mark-details',
  templateUrl: './book-mark-details.component.html',
  styleUrls: ['./book-mark-details.component.css'],
})
export class BookMarkDetailsComponent {
  constructor(private route: ActivatedRoute) { }
  value: any;
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.value = params;
      this.value = this.value.cat;
    });
  }
}
