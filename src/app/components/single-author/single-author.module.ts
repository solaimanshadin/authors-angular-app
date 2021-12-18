import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleAuthorComponent } from './single-author.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SingleAuthorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SingleAuthorComponent
  ]
})
export class SingleAuthorModule { }
