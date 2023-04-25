import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';

export type User = {
  email: string;
  password: string;
};

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  email = "";
  password = "";

  constructor (private registerService: RegisterService) {}

  registerUser() {
    const user = {
      email: this.email,
      password: this.password,
    };
    this.registerService.register(user);

    this.email = "";
    this.password = "";
  }

}

