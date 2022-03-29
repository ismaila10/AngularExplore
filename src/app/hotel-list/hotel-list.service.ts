import { Injectable } from "@angular/core";
import { IHotel } from "./hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelListService {

  public getHotels(): IHotel[] {
    return [
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
  }
}
