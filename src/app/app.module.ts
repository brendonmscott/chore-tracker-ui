import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ChoresModule } from './chores/chores.module';
import { ChoresService } from './shared/chores.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './shared/users.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './home/home.module';
import { FamilyModule } from './family/family.module';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

export function tokenGetterFn() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChoresModule,
    FamilyModule,
    HomeModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetterFn
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ChoresService,
    UsersService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
