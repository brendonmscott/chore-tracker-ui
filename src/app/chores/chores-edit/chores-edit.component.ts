import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { ChoresService } from '../../shared/chores.service';
import { UsersService } from '../../shared/users.service';
import { AuthService } from '../../shared/auth.service';

import { Chore } from '../../domain/chore';


@Component({
  selector: 'app-chores-edit',
  templateUrl: './chores-edit.component.html',
  styleUrls: ['./chores-edit.component.css']
})

export class ChoresEditComponent implements OnInit {

  chore: Chore;
  public choreForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private usersService: UsersService,
              private choresService: ChoresService,
              private authService: AuthService,
              fb: FormBuilder) {
    this.choreForm = fb.group({
      id: null,
      name: null,
      description: [null, Validators.required]
    });
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {

      const id = params['id'];

      /* Get Chore */
      this.choresService.get(id).subscribe( (chore: Chore) => {
        this.chore = chore;
        this.updateForm();
      });
    });
  }

  updateForm() {

    this.choreForm.patchValue({
      id: this.chore.id,
      name: this.chore.name,
      description: this.chore.description
    });
  }

  onSave() {
    console.log(this.choreForm.value);
    this.choresService.update(this.choreForm.value).subscribe(res => {
      this.router.navigate(['/chores']);
    });

  }

  deleteChore() {
    if (confirm('Are you sure you wish to delete?')) {
      this.choresService.delete(this.chore.id).subscribe(res => {
        this.backToList();
      });
    }
  }

  backToList() {
    this.router.navigate(['/chores']);
  }
}
