import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public sharedOrder;

  constructor() { }

  setOrder(order) {
    this.sharedOrder = order;
  }

  getOrder() {
    const temp = this.sharedOrder;
    this.clearOrder();

    return temp;
  }

  clearOrder() {
    this.sharedOrder = undefined;
  }
}
