import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookshelvesComponent } from './bookshelves.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookshelvesComponent],
  exports: [BookshelvesComponent]
})
export class BookshelvesModule { }
