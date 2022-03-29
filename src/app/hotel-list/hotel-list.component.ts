import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel'

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  constructor() { }

  title: string = 'Hotels';
  hotels: IHotel[] = [
    {
      hotelId: 1,
      hotelName: "swiss",
      description: "Top ok cool trankil nice génial, magnifique",
      price: 120,
      imageUrl: '',
      rating: 3.5
    },
    {
      hotelId: 2,
      hotelName: "callback",
      description: "Top ok cool trankil nice génial, magnifique",
      price: 120,
      imageUrl: '',
      rating: 5
    },
    {
      hotelId: 3,
      hotelName: "amen",
      description: "Top ok cool trankil nice génial, magnifique",
      price: 120,
      imageUrl: '',
      rating: 2
    }
  ];
  showBadge: boolean = false;
  private _hotelFilter = 'mot';
  filteredHotels: IHotel[] = [];

  ngOnInit(): void {
    this.filteredHotels = this.hotels;
    this.hotelFilter = "";
  }

  toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }
  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  private filterHotels(criteria: string): IHotel[] {
    criteria = criteria.toLocaleLowerCase();

    const response = this.hotels.filter(x => x.hotelName.toLocaleLowerCase().indexOf(criteria) != -1);
    return response;
  }

}
