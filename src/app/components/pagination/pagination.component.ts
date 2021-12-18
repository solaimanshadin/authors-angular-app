import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() totalCount: number = 0;
  @Input() currentPage: number = 1;
  @Output()
  onPaginationButtonClick = new EventEmitter();
  perPage: number = 6;
  isFirstPage: boolean = true;
  isLastPage: boolean = false;

  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;

  constructor() {}

  ngOnInit(): void {
    this.isLastPage =
      this.currentPage >= Math.ceil(this.totalCount / this.perPage);
  }

  handleNext(): void {
    this.currentPage++;
    this.isFirstPage = this.currentPage <= 1;
    this.isLastPage =
      this.currentPage >= Math.ceil(this.totalCount / this.perPage);
    this.onPaginationButtonClick.emit(this.currentPage);
  }
  handlePrev(): void {
    this.currentPage--;
    this.isFirstPage = this.currentPage <= 1;
    this.isLastPage =
      this.currentPage === Math.ceil(this.totalCount / this.perPage);
    this.onPaginationButtonClick.emit(this.currentPage);
  }
}
