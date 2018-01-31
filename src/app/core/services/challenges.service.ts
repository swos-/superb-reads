import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Challenge } from '../../models/challenge.model';

const CHALLENGES_API: string = `${environment.api}/challenges`;

@Injectable()
export class ChallengesService {

  constructor(private http: HttpClient) {
  }

  getChallenges(id?: number): Observable<Challenge[]> {
    return this.http
      .get<Challenge[]>(CHALLENGES_API);
  }

  getChallenge(id: number): Observable<Challenge> {
    return this.http
    .get<Challenge>(`${CHALLENGES_API}/${id}`);
  }

}
