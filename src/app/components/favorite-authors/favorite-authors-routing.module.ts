import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteAuthorsComponent } from './favorite-authors.component';

const routes: Routes = [{ path: '', component: FavoriteAuthorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteAuthorsRoutingModule { }
