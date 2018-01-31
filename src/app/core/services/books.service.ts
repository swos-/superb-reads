import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Book } from '../../models/book.model';

const BOOKS_API: string = `${environment.api}/books`;

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http
    .get<Book[]>(BOOKS_API);
  }

  getBook(id: number): Observable<Book> {
    return this.http
    .get<Book>(`${BOOKS_API}/${id}`);
  }

  searchBook(title: string): Observable<Book> {
    return this.http
    .get<Book>(`${BOOKS_API}/title_like=${title}`);
  }
}
