import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Recommendation } from '../../models/recommendation.model';

const RECOMMENDATIONS_API: string = `${environment.api}/recommendations`;

@Injectable()
export class RecommendationsService {

  constructor(private http: HttpClient) { }

  getRecommendations(): Observable<Recommendation[]> {
    return this.http
    .get<Recommendation[]>(RECOMMENDATIONS_API);
  }
}
