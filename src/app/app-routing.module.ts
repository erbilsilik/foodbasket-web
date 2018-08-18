import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "search/:postcode", component: SearchComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
