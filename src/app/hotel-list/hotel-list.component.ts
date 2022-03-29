import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel'
import { HotelListService } from './hotel-list.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  constructor(private hotelService: HotelListService){}

  title: string = 'Hotels';
  receivedRating: string = '';
  hotels: IHotel[] = [];
  showBadge: boolean = false;
  private _hotelFilter = 'mot';
  filteredHotels: IHotel[] = [];

  ngOnInit(): void {
    this.hotels = this.hotelService.getHotels();
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

  receiveRatingClicked(message: string) : void {
    this.receivedRating = message;
  }

}
