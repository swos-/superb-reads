import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingListComponent } from './reading-list.component';
import { BookCardsComponent } from './book-cards/book-cards.component';
import { ReadingListActionsComponent } from './reading-list-actions/reading-list-actions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReadingListComponent, BookCardsComponent, ReadingListActionsComponent],
  exports: [ReadingListComponent]
})
export class ReadingListModule { }
