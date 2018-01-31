import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import { MyBooksService } from '../core/services/my-books.service';

import { Book } from '../models/book.model';

@Component({
  selector: 'sr-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {
  myBooks: Book[];

  constructor(private myBooksService: MyBooksService) {
  }

  ngOnInit() {
    this.myBooksService
      .getMyBooks()
      .subscribe((data: Book[]) => {
        this.myBooks = data.filter(item => item.tags.some(tag => tag.id === 'currently-reading'));
      },
      (err: HttpErrorResponse) => {
        this.myBooks = [];
      }
    );
  }

  handleUpdate(event) {
    console.log(event);
  }

  handleViewAll(event) {
    console.log(event);
  }

  handleAddBook(event) {
    console.log(event);
  }

  handleGeneralUpdate(event) {
    console.log(event);
  }
}
