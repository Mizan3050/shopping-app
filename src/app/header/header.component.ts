import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loginInput } from '../model/loginInput.interface';
import { AppAuthService } from '../services/app-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AppAuthService, private route: Router, private activatedRoute: ActivatedRoute) { }

  isLoggedIn: boolean = false;
  routerLink = '';
  currentUser: loginInput = {

  };

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(data => this.isLoggedIn = data);
    this.authService.getCurrentUser$.subscribe(user => this.currentUser = user);
  }

  onLogOut() {
    this.authService.logOut();
    this.route.navigate(['/login'])
  }

}
