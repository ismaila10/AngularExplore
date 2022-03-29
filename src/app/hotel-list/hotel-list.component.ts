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
      imageUrl: ''
    },
    {
      hotelId: 2,
      hotelName: "swiss",
      description: "Top ok cool trankil nice génial, magnifique",
      price: 120,
      imageUrl: ''
    },
    {
      hotelId: 3,
      hotelName: "swiss",
      description: "Top ok cool trankil nice génial, magnifique",
      price: 120,
      imageUrl: ''
    }
  ];
  showBadge: boolean = false;
  hotelFilter = 'mot';
  filteredHotels: IHotel[] = [];

  ngOnInit(): void {
    this.filteredHotels = this.hotels;
  }

  toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

}
