import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { OrderComponent } from './components/order/order.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:postcode', component: SearchComponent },
  { path: 'search/:postcode/:restaurantId', component: RestaurantDetailComponent},
  { path: 'search/:postcode/:restaurantId/order', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
