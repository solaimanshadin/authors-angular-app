import { Author } from 'src/app/Model';
import { AuthorService } from 'src/app/services/author.service';
import { Component, OnInit, Input } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrls: ['./single-author.component.css']
})
export class SingleAuthorComponent implements OnInit {
  @Input() author: Author;
  faExternalLinkAlt= faExternalLinkAlt;
  constructor(public authorService: AuthorService) {
  }

  ngOnInit(): void {
  }

}
