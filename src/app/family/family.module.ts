import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyListComponent } from './family-list/family-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FamilyEditComponent } from './family-edit/family-edit.component';
import { FamilyAddComponent } from './family-add/family-add.component';

@NgModule({
  declarations: [FamilyListComponent, FamilyEditComponent, FamilyAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FamilyModule { }
