import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {
  books: any[] = []
  constructor(private service: BookService) { }

  async ngOnInit(): Promise<void> {
    this.books = await this.service.getBooks()
  }

}
