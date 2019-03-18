import { Injectable } from '@angular/core';
import { User } from '../domain/user';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Credential } from '../domain/credential';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://localhost:8765/chore-tracker';
  private user: User;

  constructor(private jwtHelper: JwtHelperService,
              private http: HttpClient, private router: Router) { }

  public get authenticated(): boolean {

    const token = this.jwtHelper.tokenGetter();
    if (token) {
      // Check if saved token has not expired
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  public login(userCreds: Credential) {
    const url = `${this.BASE_URL}/auth/signin`;

    return this.http.post(url, userCreds,
      { responseType: 'text' }
    ).subscribe(
      tokenResult => {
        const result = JSON.parse(tokenResult);
        localStorage.setItem('token', result.accessToken);
        localStorage.setItem('id', result.id);
        localStorage.setItem('email', userCreds.email);

        this.user = new User();
        this.user.id = result.id;
        this.user.email = userCreds.email;
        console.log(this.user);
        this.router.navigate(['home-logged-in']);
      },
      error => {
        console.log('login failed', error);
      });
  }

  /* Logout in AuthService simply removes token */
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('email');

    this.router.navigate(['home']);
  }

  public get currentUser(): User {

    if (this.user && this.user.id) {
      return this.user;
    }

    this.user = new User();
    this.user.id = localStorage.getItem('id');
    this.user.email = localStorage.getItem('email');

    return this.user;
  }
}

