import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product, ProductList } from 'src/app/model/product.interface';
import { ListOfProducts } from 'src/data/product-data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  listOfProducts: ProductList = ListOfProducts;
  productDetail: Product;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(params => {
      const productId = params?.productId;
      this.productDetail = this.listOfProducts.products.find(product => product.id === productId);
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
