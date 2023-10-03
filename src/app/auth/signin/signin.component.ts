import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  userGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  confirmpassword: string= "";
  listName: string[] = [];
  ngOnInit(): void {
    this.userGroup = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  onSubmitForm() {
    console.log(this.userGroup.value);
  }
}
