import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/model/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = {};

  constructor() { }

  ngOnInit(): void {
  }

}
