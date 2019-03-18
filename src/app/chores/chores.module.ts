import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoresListingComponent } from './chores-listing/chores-listing.component';
import { ChoresAddComponent } from './chores-add/chores-add.component';
import { ChoresEditComponent } from './chores-edit/chores-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChoresListingComponent, ChoresAddComponent, ChoresEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ChoresModule { }
