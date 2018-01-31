import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Award } from '../../models/award.model';

const AWARDS_API: string = `${environment.api}/awards`;

@Injectable()
export class AwardsService {
  constructor(private http: HttpClient) { }

  getAwards(): Observable<Award[]> {
    return this.http
      .get<Award[]>(AWARDS_API);
  }

  getAward(id): Observable<Award> {
    return this.http
      .get<Award>(AWARDS_API);
  }
}
