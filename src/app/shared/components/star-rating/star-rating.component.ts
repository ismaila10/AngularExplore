import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges {

  constructor() { }

  starWidth: number = 0;
  @Input() rating: number = 2;

  @Output() starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5;
  }

  sendRating() : void {
    this.starRatingClicked.emit(`La note est de ${this.rating}`);
  }

}
