import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit, OnChanges {

  constructor() { }

  starWidth: number = 0;
  rating: number = 2;

  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5;
  }

  ngOnInit(): void {
  }

}
