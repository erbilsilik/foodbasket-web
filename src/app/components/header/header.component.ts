import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private modal: NgbModal) {}

  ngOnInit() {
    if (this.authService.getToken()) {
      this.authService.isLoggedIn = true;
    }
  }

  logout() {
    this.authService.logout();
    this.authService.isLoggedIn = false;
  }

  openLoginModal() {
    this.modal.open(LoginComponent, {backdropClass: 'backdrop'});
  }
}
