import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http
      .post<{ access_token: string }>("http://localhost:3000/api/login", {
        email: email,
        password: password
      })
      .pipe(
        map(result => {
          localStorage.setItem("access_token", result.access_token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem("access_token");
  }

  public getToken(): string {
    return localStorage.getItem("access_token");
  }
}
