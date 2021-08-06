import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListOfProducts } from 'src/data/product-data';
import { Product, ProductList } from '../model/product.interface';

@Injectable({
    providedIn: 'root'
})
export class CartRepositoryService {

    listOfProducts: ProductList = ListOfProducts;
    productsInCart: Product[] = []

    public productInCart = new BehaviorSubject<number>(this.productsInCart?.length);
    productInCart$ = this.productInCart.asObservable();

    addProductToCart(id: string){
        const productToAdd = this.listOfProducts?.products.find(product => product?.id === id);
        this.productsInCart.push(productToAdd);
        this.productInCart.next(this.productsInCart?.length)
    }

}