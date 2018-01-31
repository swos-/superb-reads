import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../models/book.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'sr-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.css']
})
export class BookCardsComponent implements OnInit {
  @Input()
  book: Book;

  @Output()
  update: EventEmitter<any> = new EventEmitter();

  assetsPath: string = environment.assetsPath;
  constructor() { }

  ngOnInit() {
  }

  onUpdateProgress(title: string) {
    this.update.emit(title);
  }

}
