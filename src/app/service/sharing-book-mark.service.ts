import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharingBookMarkService {
  constructor() { }
  bookMarksKeys: any = [];
  //get all the keys from the localstroage
  gettingAllTheKey() {
    for (let key in localStorage) {
      this.bookMarksKeys.push(key);
    }
    this.bookMarksKeys = this.bookMarksKeys.slice(0, -6);
    return this.bookMarksKeys;
  }
  bookMarksObj: any = [];
  itemFromLocalStroge: any;
  AllTheBookMarks() {
    for (let i = 0; i < this.bookMarksKeys.length; i++) {
      this.itemFromLocalStroge = localStorage.getItem(this.bookMarksKeys[i]);
      this.bookMarksObj.push(this.itemFromLocalStroge);
    }
    return this.bookMarksObj;
  }
  categoryNames: any = [];
  categoryParse: any;
  getAllCategory() {
    this.categoryNames = this.bookMarksObj.filter((x: any) => {
      this.categoryParse = JSON.parse(x);

      return this.categoryNames.category;
    });
  }
}
