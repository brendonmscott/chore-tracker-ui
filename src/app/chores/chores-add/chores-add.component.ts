import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChoresService } from '../../shared/chores.service';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-chores-add',
  templateUrl: './chores-add.component.html',
  styleUrls: ['./chores-add.component.css']
})
export class ChoresAddComponent implements OnInit {

  public choreForm: FormGroup;
  submitted = false;

  constructor(private router: Router,
              private choresService: ChoresService,
              private usersService: UsersService,
              fb: FormBuilder) {

    console.log('Init Chore Form');
    this.choreForm = fb.group({
      name: [null, [Validators.required, Validators.minLength(2)], null],
      description: [null, Validators.required]
    });
  }

  ngOnInit() {}

  reset() {
    this.submitted = false;
    this.choreForm.reset();
  }

  onSave() {
    console.log(this.choreForm.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.choreForm.invalid) {
      return;
    }

    this.choresService.add(this.choreForm.value).subscribe(res => {
      this.router.navigate(['chores']);
      // this.reset();
    });
  }

  get description() { return this.choreForm.get('description'); }
  get name() { return this.choreForm.get('name'); }

}
