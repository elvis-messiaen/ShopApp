import { Component } from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user : User = {
    id: 0,
    firstname: "",
    lastname: "",
    email:"",
    password: ""
  }

  confirmpassword: string= "";
  listName: string[] = [];

  addInfos() {

  }
}
