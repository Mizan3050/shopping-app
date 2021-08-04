import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/app/model/product.interface';
import { ListOfProducts } from 'src/data/product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ListOfProducts:ProductList = ListOfProducts;

  constructor() { }

  ngOnInit(): void {
  }

}
