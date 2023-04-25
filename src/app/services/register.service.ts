import { Injectable } from '@angular/core';
import { User } from "../register-form/register-form.component";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() {}

  register(user: User) {
    let users = new Array<User>();
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users") as string);
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

}
