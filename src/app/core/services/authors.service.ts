import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Author } from '../../models/author.model';

const AUTHORS_API: string = `${environment.api}/authors`;

@Injectable()
export class AuthorsService {
  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http
      .get<Author[]>(AUTHORS_API);
  }

  getAuthor(id: number): Observable<Author> {
    return this.http
      .get<Author>(`${AUTHORS_API}/${id}`);
  }
}
