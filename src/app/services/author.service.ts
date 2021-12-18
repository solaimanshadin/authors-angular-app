import { AuthorApiResponse } from './../Model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Author } from '../Model';
@Injectable({
  providedIn: 'root',
})

export class AuthorService {
  authors = new BehaviorSubject<AuthorApiResponse>({} as AuthorApiResponse);
  AuthorListCast = this.authors.asObservable();
  favoriteAuthorList = new BehaviorSubject<Author[]>([]);

  constructor(private http: HttpClient) {
    const favoriteAuthorList: Author[] = JSON.parse(
      localStorage.getItem('favoriteAuthors') || '[]'
    );
    this.favoriteAuthorList.next(favoriteAuthorList);
  }

  getAuthors(page: number = 1): Observable<any> {
    return this.http
      .get<any>(`https://api.quotable.io/authors?limit=6&page=${page}`)
      .pipe(
        map((res) => {
          const mappedData = this.setAuthors(res);
          return mappedData;
        })
      );
  }

  setAuthors(data: AuthorApiResponse) {
    data.results = data?.results?.map((author: Author) => ({
      ...author,
      favorite: !!this?.favoriteAuthorList
        .getValue()
        ?.find((aut: Author) => aut._id === author._id),
    }));
    this.authors.next(data);
    return data;
  }

  getFavoriteAuthors() {
    return this.favoriteAuthorList.asObservable();
  }

  addFavoriteAuthor(newAuthor: Author) {
    const oldFavList = this.favoriteAuthorList.getValue();
    this.favoriteAuthorList.next([
      ...oldFavList,
      { ...newAuthor, favorite: true },
    ]);
    localStorage.setItem(
      'favoriteAuthors',
      JSON.stringify(this.favoriteAuthorList.getValue())
    );

    this.setAuthors(this.authors.getValue());
  }

  removeFromFavoriteAuthor(author: Author): void {
    const oldFavoriteList = this.favoriteAuthorList.getValue();
    const newFavoriteList = oldFavoriteList.filter((au: Author) => au._id !== author._id);
    localStorage.setItem('favoriteAuthors', JSON.stringify(newFavoriteList));

    this.favoriteAuthorList.next(newFavoriteList);
    this.setAuthors(this.authors.getValue())
  }
}
