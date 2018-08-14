import {RestaurantModel} from "./restaurant.model";

export class RestaurantSearchModel {
  min_price: number;
  normal_price: number;
  rise_price: number;
  restaurant: RestaurantModel;
}
