import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.interface';
import { CartRepositoryService } from '../services/cart-repository.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsInCart: Product[] = this.cartRepositoryService.productsInCart;

  constructor(
    private cartRepositoryService: CartRepositoryService
  ) { }

  ngOnInit(): void {
  }

  deleteProductFromCart() {

  }

}
