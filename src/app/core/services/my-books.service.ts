import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Book } from '../../models/book.model';

const MYBOOKS_API: string = `${environment.api}/my-books`;

@Injectable()
export class MyBooksService {

  constructor(private http: HttpClient) {
  }

  getMyBooks(): Observable<Book[]> {
    return this.http
    .get<Book[]>(MYBOOKS_API);
  }

  searchBook(title: string): Observable<Book> {
    return this.http
    .get<Book>(`${MYBOOKS_API}/title_like=${title}`);
  }
}
