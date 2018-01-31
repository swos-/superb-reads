import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { Challenge } from '../../models/challenge.model';

@Component({
  selector: 'sr-reading-challenge-panel',
  templateUrl: './reading-challenge-panel.component.html',
  styleUrls: ['./reading-challenge-panel.component.css']
})
export class ReadingChallengePanelComponent implements OnInit {
  @Input()
  challenge: Challenge;

  constructor() { }

  ngOnInit() {
  }

}
