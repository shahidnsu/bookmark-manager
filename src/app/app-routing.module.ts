import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMarkDetailsComponent } from './component/book-mark-details/book-mark-details.component';
import { BookmarkFromComponent } from './component/bookmark-from/bookmark-from.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: BookmarkFromComponent },
  { path: 'details', component: BookMarkDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
