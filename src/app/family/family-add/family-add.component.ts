import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../shared/users.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-family-add',
  templateUrl: './family-add.component.html',
  styleUrls: ['./family-add.component.css']
})
export class FamilyAddComponent implements OnInit {

  public familyMemberForm: FormGroup;
  submitted = false;

  constructor(private router: Router,
              private authService: AuthService,
              private usersService: UsersService,
              fb: FormBuilder) {

    console.log('Init Family Member Form');
    this.familyMemberForm = fb.group({
      username: [null, [Validators.required, Validators.minLength(2)], null],
      firstName: [null, [Validators.required, Validators.minLength(2)], null],
      lastName: [null, [Validators.required, Validators.minLength(2)], null],
      birthDate: [null, [Validators.required]]
    });
  }

  ngOnInit() {}

  reset() {
    this.submitted = false;
    this.familyMemberForm.reset();
  }

  onSave() {
    console.log(this.familyMemberForm.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.familyMemberForm.invalid) {
      return;
    }

    const userId = this.authService.currentUser.id;

    this.usersService.addFamilyMember(userId, this.familyMemberForm.value).subscribe(res => {
      this.router.navigate(['family']);
    });
  }

  get username() { return this.familyMemberForm.get('username'); }
  get firstName() { return this.familyMemberForm.get('firstName'); }
  get lastName() { return this.familyMemberForm.get('lastName'); }
  get birthDate() { return this.familyMemberForm.get('birthDate'); }

}
