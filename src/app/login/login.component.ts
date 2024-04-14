// registration.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  };

  onSubmit() {

    console.log(this.userData);
  }
}
