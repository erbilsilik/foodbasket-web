import { SearchService } from "./../services/search.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-restaurant-detail",
  templateUrl: "./restaurant-detail.component.html",
  styleUrls: ["./restaurant-detail.component.css"]
})
export class RestaurantDetailComponent implements OnInit {
  private sub: any;
  public restaurantId: any;
  public foods: any;
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // this.restaurantId = +params["id"];
      this.restaurantId = +params["restaurantId"];
    });
    this.getFoods();
  }

  getFoods() {
    this.searchService
      .getRestaurantFoods(this.restaurantId)
      .subscribe(response => {
        this.foods = response;
      });
  }
}
