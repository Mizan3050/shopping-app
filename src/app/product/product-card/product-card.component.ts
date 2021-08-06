import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
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

  @Output() addToProduct$ = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(id: string) {
    this.addToProduct$.emit(id);
  }

}
