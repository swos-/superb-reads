import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WantToReadListComponent } from './want-to-read-list.component';
import { WantToReadPanelComponent } from './want-to-read-panel/want-to-read-panel.component';
import { WantToReadActionsComponent } from './want-to-read-actions/want-to-read-actions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [WantToReadListComponent, WantToReadPanelComponent, WantToReadActionsComponent],
  exports: [WantToReadListComponent]
})
export class WantToReadListModule { }
