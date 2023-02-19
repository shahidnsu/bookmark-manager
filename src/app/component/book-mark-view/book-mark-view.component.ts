import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-mark-view',
  templateUrl: './book-mark-view.component.html',
  styleUrls: ['./book-mark-view.component.css'],
})
export class BookMarkViewComponent {
  constructor(private route: Router) { }
  @Input() value: any;
  currentValue: any;
  isBoolen: boolean = false;
  redirectTo(value: any) {
    this.isBoolen = true;
    console.log(value);
    // this.route.navigate(['details'], {
    //   queryParams: { cat: JSON.stringify(value) },
    // });
    return (this.currentValue = value);
  }
}
