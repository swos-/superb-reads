import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import { MyBooksService } from '../core/services/my-books.service';

import { Book } from '../models/book.model';

@Component({
  selector: 'sr-want-to-read-list',
  templateUrl: './want-to-read-list.component.html',
  styleUrls: ['./want-to-read-list.component.css']
})
export class WantToReadListComponent implements OnInit {
  myBooks: Book[];

  constructor(private myBooksService: MyBooksService) {
  }

  ngOnInit() {
    this.myBooksService
      .getMyBooks()
      .subscribe((data: Book[]) => {
        this.myBooks = data.filter(item => item.tags.some(tag => tag.id === 'wants-to-read'));
      },
      (err: HttpErrorResponse) => {
        this.myBooks = [];
      }
    );
  }
}
