import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public order;
  public orderItems = [];
  public customer;
  public orderStatus: any = 'confirm';

  constructor(private orderService: OrderService,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    // TODO get shared order from getter method
    if (this.orderService.sharedOrder) {
      this.order = this.orderService.sharedOrder;
    } else {
        this.router.navigateByUrl('');
    }
    this.getCustomerInfo();
  }

  getCustomerInfo() {
    this.customerService.getInfo()
      .subscribe(response => {
          this.customer = response;
        }
      );
  }

  getOrderItems() {
    this.order.basket.forEach(item => {
      const food: any = {};
      food.food_id = item.id;
      food.restaurant_id = item.restaurant_id;
      food.amount = item.amount;
      food.price = item.price;
      this.orderItems.push(food);
    });

    return this.orderItems;
  }

  confirmOrder() {
    this.order.customerAddressId = 2;
    this.order.status = 'waiting';
    this.order.orderItems = this.getOrderItems();

    // TODO this will give an error on second click
    delete this.order.basket;

    this.orderService.createOrder(this.order)
      .subscribe(() => {
        this.orderStatus = 'received';
        setTimeout(() => {
          this.router.navigateByUrl('');
        }, 5000);
      });
  }
}
