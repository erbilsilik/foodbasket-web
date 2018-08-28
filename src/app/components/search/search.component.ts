import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { RestaurantSearchModel } from '../../models/restaurant-search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  postcode: string;
  private sub: any;
  restaurantsSearch: RestaurantSearchModel;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  searchPropert() {
    this.searchService
      .getRestaurantByPostCode(this.postcode)
      .subscribe((response: RestaurantSearchModel) => {
        this.restaurantsSearch = response;
      });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.postcode = params['postcode'];
      this.searchPropert();
    });
  }
}
