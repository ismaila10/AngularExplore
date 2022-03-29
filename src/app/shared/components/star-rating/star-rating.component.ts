import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges {

  constructor() { }

  starWidth: number = 0;
  @Input() rating: number = 2;

  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5;
    console.log(this.rating)
  }

}
