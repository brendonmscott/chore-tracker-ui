import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../../shared/users.service';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../domain/user';

@Component({
  selector: 'app-family-edit',
  templateUrl: './family-edit.component.html',
  styleUrls: ['./family-edit.component.css']
})
export class FamilyEditComponent implements OnInit {

  familyMember: User;
  submitted = false;
  public familyMemberForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private usersService: UsersService,
              private authService: AuthService,
              fb: FormBuilder) {
    this.familyMemberForm = fb.group({
      id: null,
      username: [null, [Validators.required, Validators.minLength(2)], null],
      firstName: [null, [Validators.required, Validators.minLength(2)], null],
      lastName: [null, [Validators.required, Validators.minLength(2)], null],
      birthDate: [null, [Validators.required]]
    });
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {

      const id = params['id'];

      /* Get Family Member */
      this.usersService.get(id).subscribe( (familyMember: User) => {
        this.familyMember = familyMember;
        this.updateForm();
      });
    });
  }

  updateForm() {

    this.familyMemberForm.patchValue({
      id: this.familyMember.id,
      username: this.familyMember.username,
      firstName: this.familyMember.firstName,
      lastName: this.familyMember.lastName,
      birthDate: this.familyMember.birthDate
    });
  }

  onSave() {
    console.log(this.familyMemberForm.value);
    this.submitted = true;

    this.usersService.updateFamilyMember(this.authService.currentUser.id, this.familyMemberForm.value).subscribe(res => {
      this.backToList();
    });

  }

  removeFamilyMember() {
    if (confirm('Are you sure you wish to delete?')) {
      this.usersService.removeFamilyMember(this.authService.currentUser.id, this.familyMember.id).subscribe(res => {
        this.backToList();
      });
    }
  }

  backToList() {
    this.router.navigate(['/family']);
  }

  get username() { return this.familyMemberForm.get('username'); }
  get firstName() { return this.familyMemberForm.get('firstName'); }
  get lastName() { return this.familyMemberForm.get('lastName'); }
  get birthDate() { return this.familyMemberForm.get('birthDate'); }
}
