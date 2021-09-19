import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.scss']
})
export class InputOutputChildComponent implements OnInit {

  @Input('rating-total') ratingTotal: any;
  @Output() ratingUpdated = new EventEmitter();

  fasStar = fasStar;
  farStar = farStar;
  filled = false;

  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
  }

  ngOnInit(): void {
  }

  makeRating() {
    this.filled = !this.filled;
    this.ratingUpdated.emit(this.filled);
  }

}
