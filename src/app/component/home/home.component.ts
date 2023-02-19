import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharingBookMarkService } from '../../service/sharing-book-mark.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private route: Router,
    private bookMarkService: SharingBookMarkService
  ) { }
  showTheBookmark() {
    this.route.navigate(['add']);
  }
  allBookMarks: any;
  ngOnInit() {
    this.allBookMarks = this.bookMarkService.AllTheBookMarks();
    console.log(this.allBookMarks);
  }
}
