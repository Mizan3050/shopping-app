import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppAuthService } from '../services/app-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  isLoggedIn = false;
  hide = true;
  constructor(private fb: FormBuilder, private authService: AppAuthService, private route: Router) { }

  ngOnInit(): void {
    if (this.authService.loggedIn) {
      this.isLoggedIn = this.authService.isAuthenticated(); //use service variable, use semi colon  
    }
    else {
      this.isLoggedIn = this.authService.isAuthenticated();
    }
  }
  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    } return null
  }

  login() {
    if(this.username.valid && this.password.valid) {
      this.authService.logIn({ username: this.username.value, password: this.password.value });
      if (this.authService.loggedIn) {
        this.route.navigate(['/']);
      }
    }
  }

}
