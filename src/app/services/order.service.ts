import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public sharedOrder;

  constructor(private http: HttpClient) { }

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

  createOrder (order): Observable<any> {
    return this.http.post<any>('api/orders', order);
  }
}
