import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public email: string;
  public password: string;
  public error: string;

  constructor(private authService: AuthService,
              private router: Router,
              public loginModal: NgbActiveModal) {}

  public submit() {
    this.authService
      .login(this.email, this.password)
      .pipe(first())
      .subscribe(
        result => this.loginModal.close(),
        err => (this.error = 'Could not authenticate')
      );
    this.authService.isLoggedIn = true;
  }
}
