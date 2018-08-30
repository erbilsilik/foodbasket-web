import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getInfo() {
    return this.http.get('api/me');
  }
}
