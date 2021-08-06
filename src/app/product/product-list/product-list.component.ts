import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { Product, ProductList } from 'src/app/model/product.interface';
import { ListOfProducts } from 'src/data/product-data';
import { takeUntil } from 'rxjs/operators';
import { CartRepositoryService } from 'src/app/services/cart-repository.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  listOfProducts: ProductList = ListOfProducts;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  filteredProductList: Product[];

  constructor(private route: ActivatedRoute, private cartRepositoryService: CartRepositoryService) { }

  ngOnInit(): void {
    let categoryType: string;
    this.route.params.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(params => {
      categoryType = params?.category;
      if(categoryType) {
        this.filteredProductList = this.listOfProducts?.products.filter(product => product.category === categoryType);
      } else {
        this.filteredProductList = this.listOfProducts?.products;
      }
    });
  }

  addToCart(id: string) {
    this.cartRepositoryService.addProductToCart(id);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
