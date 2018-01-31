import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardsComponent } from './awards.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AwardsComponent],
  exports: [AwardsComponent]
})
export class AwardsModule { }
