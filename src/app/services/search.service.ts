import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // private readonly url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getRestaurantByPostCode(postcode: string) {
    return this.http.get('api/restaurant-search?postcode=' + postcode);
  }

  getRestaurantFoods(restaurantId: string) {
    return this.http.get('api/' + restaurantId + '/foods');
  }
}
