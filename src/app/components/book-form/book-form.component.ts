import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.sass']
})
export class BookFormComponent implements OnInit {

  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: BookService
    ) { 
    this.form = this.formBuilder.group({
      title: '',
      author: '',
      description: '',
      year: ''
    })
  }

  ngOnInit(): void {
    this.service.getBooks()
  }

  async onSubmit() {
    await this.service.addBook(this.form.value)
    window.location.reload()
  }

}
