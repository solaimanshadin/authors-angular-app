import { AuthorApiResponse } from './../../Model';
import { Component, OnInit } from '@angular/core';
import { AuthorService } from './../../services/author.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  authors: AuthorApiResponse = {} as AuthorApiResponse;
  constructor(private authorService: AuthorService) {}

  getPageData(page: number) {
    this.authors.page = page;
    this.authorService
      .getAuthors(this.authors.page)
      .subscribe((authors) => (this.authors = authors));
  }

  ngOnInit(): void {
    this.authorService.AuthorListCast.subscribe((authors: AuthorApiResponse) => {
      this.authors = authors;
    });
    this.getPageData(1);
  }
}
