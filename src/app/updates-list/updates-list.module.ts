import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatesListComponent } from './updates-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UpdatesListComponent],
  exports: [UpdatesListComponent]
})
export class UpdatesListModule { }
