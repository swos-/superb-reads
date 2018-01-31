import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailsComponent } from './book-details.component';

const moduleRoutes: Routes = [
  { path: 'books/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      moduleRoutes
    ),
  ],
  declarations: [BookDetailsComponent],
  exports: [BookDetailsComponent]
})
export class BookDetailsModule { }
