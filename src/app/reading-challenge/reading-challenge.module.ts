import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReadingChallengeComponent } from './reading-challenge.component';
import { ReadingChallengePanelComponent } from './reading-challenge-panel/reading-challenge-panel.component';
import { ReadingChallengeActionsComponent } from './reading-challenge-actions/reading-challenge-actions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ReadingChallengeComponent, ReadingChallengePanelComponent, ReadingChallengeActionsComponent],
  exports: [ReadingChallengeComponent]
})
export class ReadingChallengeModule { }
