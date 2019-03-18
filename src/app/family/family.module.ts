import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyListComponent } from './family-list/family-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FamilyListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FamilyModule { }
