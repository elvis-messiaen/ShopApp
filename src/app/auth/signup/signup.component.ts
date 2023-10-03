import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  userGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.userGroup = this.formBuilder.group({
      firstname: [null],
      lastname: [null],
      email: [null],
      password: [null]
    })
  }

  confimreMDP: string= "";

 onSubmitForm() {
   console.log(this.userGroup.value);
 }
}
