import { AuthService } from "./../../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.authService.logout();
  }
}
