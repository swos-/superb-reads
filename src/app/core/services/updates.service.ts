import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Update } from '../../models/update.model';

const UPDATES_API: string = `${environment.api}/updates`;

@Injectable()
export class UpdatesService {

  constructor(private http: HttpClient) { }

  getUpdates(): Observable<Update[]> {
    return this.http
    .get<Update[]>(UPDATES_API);
  }
}
