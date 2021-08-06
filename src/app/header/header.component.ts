import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { loginInput } from '../model/loginInput.interface';
import { AppAuthService } from '../services/app-auth.service';
import { CartRepositoryService } from '../services/cart-repository.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AppAuthService,
    private route: Router,
    private cartRepositoryService: CartRepositoryService,
    public dialog: MatDialog
    ) { }

  isLoggedIn: boolean = false;
  routerLink = '';
  cartProductsNumber$ = this.cartRepositoryService.productsInCart$;
  currentUser: loginInput = {

  };

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(data => this.isLoggedIn = data);
    this.authService.getCurrentUser$.subscribe(user => this.currentUser = user);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CartComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onLogOut() {
    this.authService.logOut();
    this.route.navigate(['/login'])
  }

}
