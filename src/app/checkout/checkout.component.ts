import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.interface';
import { CartRepositoryService } from 'src/app/services/cart-repository.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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
