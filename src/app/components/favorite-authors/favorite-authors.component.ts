import { Author } from 'src/app/Model';
import { AuthorService } from 'src/app/services/author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-authors',
  templateUrl: './favorite-authors.component.html',
  styleUrls: ['./favorite-authors.component.css'],
})
export class FavoriteAuthorsComponent implements OnInit {
  favoriteAuthors: Author[] = [];
  favoriteAuthorsOfThePage: Author[] = [];
  perPage: number = 6;
  constructor(private authorService: AuthorService) {}

  getPageData(page: number): void  {
    this.authorService.getFavoriteAuthors().subscribe((list: Author[]) => {
      this.favoriteAuthors = list;
      this.favoriteAuthorsOfThePage = list.slice((page - 1) * this.perPage, page * this.perPage);
    });
  }

  ngOnInit(): void {
    this.getPageData(1);
  }
}
