import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.interface';
import { CartRepositoryService } from '../services/cart-repository.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsInCart$: Observable<Product[]> = this.cartRepositoryService.productsInCart;

  constructor(
    private cartRepositoryService: CartRepositoryService
  ) { }

  ngOnInit(): void {
  }

  deleteProductFromCart(id: string) {
    this.cartRepositoryService.deleteProductFromCart(id);
  }

  increaseQuantity(id: string) {
    this.cartRepositoryService.increaseProductQuantity(id, true);
  }

  decreaseQuantity(id: string) {
    this.cartRepositoryService.increaseProductQuantity(id, false);
  }

}
