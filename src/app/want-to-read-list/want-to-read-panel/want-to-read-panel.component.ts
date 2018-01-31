import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../models/book.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'sr-want-to-read-panel',
  templateUrl: './want-to-read-panel.component.html',
  styleUrls: ['./want-to-read-panel.component.css']
})
export class WantToReadPanelComponent implements OnInit {
  assetsPath: string = environment.assetsPath;

  @Input()
  book: Book;

  constructor() { }

  ngOnInit() {
  }

}
