import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'favorite-authors',
    loadChildren: () =>
      import('./components/favorite-authors/favorite-authors.module').then(
        (m) => m.FavoriteAuthorsModule
      ),
  },
  { path: '', loadChildren: () => import('./components/authors/authors.module').then(m => m.AuthorsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
