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
import { FamilyAddComponent } from './family/family-add/family-add.component';
import { RegisterComponent } from './register/register.component';
import { FamilyEditComponent } from './family/family-edit/family-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home-logged-in', component: HomeLoggedInComponent, canActivate: [ AuthGuardService ] },
  { path: 'chores',  component: ChoresListingComponent, canActivate: [ AuthGuardService ] },
  { path: 'chores/create', component: ChoresAddComponent, canActivate: [ AuthGuardService ] },
  { path: 'chores/:id', component: ChoresEditComponent, canActivate: [ AuthGuardService ] },
  { path: 'family', component: FamilyListComponent, canActivate: [ AuthGuardService ] },
  { path: 'family/add', component: FamilyAddComponent, canActivate: [ AuthGuardService ] },
  { path: 'family/edit/:id', component: FamilyEditComponent, canActivate: [ AuthGuardService ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
