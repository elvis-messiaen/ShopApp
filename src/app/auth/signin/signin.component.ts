import { Component } from '@angular/core';
import {User} from "../../models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: FormControl;
  password:  FormControl;

  signinForm: FormGroup;

  constructor(private fb: FormBuilder) {
  this.email = fb.control("",[Validators.required, Validators.email])
  this.password = fb.control("",[Validators.required])

  this.signinForm = fb.group({
    email: this.email,
    password: this.password
    })
  }
  confirmpassword: string= "";
  listName: string[] = [];

  addInfos() {
  }
}
