import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkFromComponent } from './component/bookmark-from/bookmark-from.component';
import { HomeComponent } from './component/home/home.component';
import { BookMarkViewComponent } from './component/book-mark-view/book-mark-view.component';
import { BookMarkDetailsComponent } from './component/book-mark-details/book-mark-details.component';

@NgModule({
  declarations: [AppComponent, BookmarkFromComponent, HomeComponent, BookMarkViewComponent, BookMarkDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
