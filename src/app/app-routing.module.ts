import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoresListingComponent } from './chores/chores-listing/chores-listing.component';
import { HomeComponent } from './home/home/home.component';
import { ChoresAddComponent } from './chores/chores-add/chores-add.component';
import { ChoresEditComponent } from './chores/chores-edit/chores-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { HomeLoggedInComponent } from './home/home-logged-in/home-logged-in.component';
import { FamilyListComponent } from './family/family-list/family-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home-logged-in', component: HomeLoggedInComponent, canActivate: [ AuthGuardService ] },
  { path: 'chores',  component: ChoresListingComponent, canActivate: [ AuthGuardService ] },
  { path: 'chores/create', component: ChoresAddComponent, canActivate: [ AuthGuardService ] },
  { path: 'chores/:id', component: ChoresEditComponent, canActivate: [ AuthGuardService ] },
  { path: 'family', component: FamilyListComponent, canActivate: [ AuthGuardService ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
