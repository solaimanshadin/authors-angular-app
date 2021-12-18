import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { SingleAuthorModule } from '../single-author/single-author.module';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [
    AuthorsComponent,
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SingleAuthorModule,
    PaginationModule
  ]
})
export class AuthorsModule { }
