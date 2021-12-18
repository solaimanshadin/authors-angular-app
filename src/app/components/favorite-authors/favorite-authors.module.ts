import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteAuthorsRoutingModule } from './favorite-authors-routing.module';
import { FavoriteAuthorsComponent } from './favorite-authors.component';
import { SingleAuthorModule } from '../single-author/single-author.module';
import { PaginationModule } from '../pagination/pagination.module';


@NgModule({
  declarations: [
    FavoriteAuthorsComponent,
  ],
  imports: [
    CommonModule,
    FavoriteAuthorsRoutingModule,
    SingleAuthorModule,
    PaginationModule
  ]
})
export class FavoriteAuthorsModule { }
