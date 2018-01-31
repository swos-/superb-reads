import { Component, OnInit } from '@angular/core';
import { MyBooksService } from '../services/my-books.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  constructor(private myBooksService: MyBooksService) {

   }

  ngOnInit() {
  }

}
