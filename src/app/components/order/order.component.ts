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
  public foodsInBasket = [];
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
      this.getFoodsInBasket();
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

  getFoodsInBasket() {
    this.order.map(element => {
      if (element.hasOwnProperty('basket')) {
        this.foodsInBasket = element.basket;
      }
    });
  }

  confirmOrder() {
    this.order.push(
      {'customerId' : this.customer.id},
      {'customerAddressId' : 2},
    );

    this.orderStatus = 'received';
    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 5000);
  }

}
