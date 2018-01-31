import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sr-reading-list-actions',
  templateUrl: './reading-list-actions.component.html',
  styleUrls: ['./reading-list-actions.component.css']
})
export class ReadingListActionsComponent implements OnInit {
  @Output()
  update: EventEmitter<any> = new EventEmitter();

  @Output()
  addBook: EventEmitter<any> = new EventEmitter();

  @Output()
  viewAll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onViewAll() {
    this.viewAll.emit('view all');
  }

  onAddBook() {
    this.addBook.emit('add a book');
  }

  onGeneralUpdate() {
    this.update.emit('general update');
  }
}
