import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  getRestaurantByPostCode(postcode: string) {
    return this.http.get('api/restaurant-search?postcode=' + postcode);
  }

  getRestaurantFoods(restaurantId: string) {
    return this.http.get('api/' + restaurantId + '/foods');
  }
}
