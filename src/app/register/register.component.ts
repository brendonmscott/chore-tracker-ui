import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Credential } from '../domain/credential';
import { SignupRequest } from '../domain/signupRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      birthDate: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  register() {

    this.authService.register(
      new SignupRequest (
        this.registrationForm.value.userName,
        this.registrationForm.value.firstName,
        this.registrationForm.value.lastName,
        this.registrationForm.value.birthDate,
        new Credential (this.registrationForm.value.email, this.registrationForm.value.password)
      )
    );
  }
}
