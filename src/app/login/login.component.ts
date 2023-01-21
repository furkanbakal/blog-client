import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string;
password: string;

  constructor(private authService: AuthService) {}

  login() {
    if(!this.email || !this.password) {
      return;
    }

    this.authService.
        login(this.email, this.password)
        .subscribe(res => {
          if(res.access_token) {
            localStorage.setItem('accessToken', res.access_token);
          }
        });
  }
}
