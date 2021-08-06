import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/model/product.interface';
import { CartRepositoryService } from 'src/app/services/cart-repository.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartRepositoryService: CartRepositoryService) { }

  ngOnInit(): void {
  }

  addToCart(id: string) {
    this.cartRepositoryService.addProductToCart(id);
  }

}
