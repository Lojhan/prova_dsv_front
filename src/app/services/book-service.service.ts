import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseURL = 'http://localhost:5000/Book'
  constructor(private httpClient: HttpClient) { }

  async addBook(book: any) {
    return await this.httpClient.post(this.baseURL, book).toPromise()
  }

  async getBooks() {
    return this.httpClient.get<any[]>(this.baseURL).toPromise()
  }
}
