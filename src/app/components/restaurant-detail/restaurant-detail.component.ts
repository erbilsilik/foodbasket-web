import { SearchService } from '../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  private sub: any;
  public restaurantId: any;
  public foods: any;
  public basket: Array<object> = [];
  public total: any = 0;
  public customer;
  public customerId;
  public order = [];

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private authService: AuthService,
              private searchService: SearchService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.restaurantId = +params['restaurantId'];
    });
    this.getFoods();
    this.getCustomerInfo();
  }

  getFoods() {
    this.searchService
      .getRestaurantFoods(this.restaurantId)
      .subscribe(response => {
        this.foods = response;
        this.foods.map((item) => {
          item.count = 0;
        });
      });
  }

  getCustomerInfo() {
    this.customerService.getInfo()
      .subscribe(response => {
        this.customer = response;
        this.customerId = this.customer.id;
        }
      );
  }

  addToBasket(food): void {
    if (!this.checkFood(food)) {
      this.basket.push(food);
    }
    this.addToCount(food.id);
    this.totalCount();
  }

  checkFood(food): any {
    return this.basket.find((item: any) => item.id === food.id);
  }

  checkFoodId(foodId) {
    return this.basket.find((item: any) => item.id === foodId);
  }

  addToCount(foodId) {
    const checkFood: any = this.checkFoodId(foodId);
    checkFood.count++;
  }

  totalCount(): void {
    this.total = 0;
    this.basket.forEach((item: any) => {
      this.total += item.count * item.price;
    });
  }

  removeFood(food, index) {
    if (food.count > 1) {
      food.count--;
    } else {
        food.count = 0;
        this.basket.splice(index, 1);
    }
    this.totalCount();
  }

  createOrder(): void {
    this.order = [];
    this.order.push(
      {'customerId' : this.customerId},
      {'restaurantId' : this.restaurantId},
      {'basket': this.basket}
    );
  }

  checkout(): void {
    if (!this.authService.isLoggedIn) {
        console.log('please log in to make order');
    } else if (this.authService.isLoggedIn && !this.basket.length) {
        console.log('Please add something to your basket for make order');
    }
    this.createOrder();
  }
}
