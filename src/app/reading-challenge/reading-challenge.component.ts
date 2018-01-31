import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import { ChallengesService } from '../core/services/challenges.service';

import { Challenge } from '../models/challenge.model';

@Component({
  selector: 'sr-reading-challenge',
  templateUrl: './reading-challenge.component.html',
  styleUrls: ['./reading-challenge.component.css']
})
export class ReadingChallengeComponent implements OnInit {
  challenge: Challenge = <Challenge>{};
  percentage: number;

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {
    this.challengesService
      .getChallenge(2)
      .subscribe((data: Challenge) => {
        this.challenge = data;
      },
      (err: HttpErrorResponse) => {
      }
    );
  }

}
