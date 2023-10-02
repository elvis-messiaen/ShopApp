import { Component } from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
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
