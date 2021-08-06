import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListOfProducts } from 'src/data/product-data';
import { Product, ProductList } from '../model/product.interface';

@Injectable({
    providedIn: 'root'
})
export class CartRepositoryService {

    listOfProducts: ProductList = ListOfProducts;
    cartProducts: Product[] = []

    public productsInCart = new BehaviorSubject<Product[]>([]);
    productsInCart$ = this.productsInCart.asObservable();

    public isProductInCart = new BehaviorSubject<boolean>(false);
    isProductInCart$ = this.isProductInCart.asObservable();

    addProductToCart(productId: string){
        const productToAdd = this.listOfProducts?.products.find(product => product?.id === productId);
        const { quantity, id, category, imageUrl, price } = productToAdd || {}
        this.cartProducts.push({quantity: quantity+1, id, category, imageUrl, price})
        this.productsInCart.next(this.cartProducts);
    }

    isProductPresentInCart(id: string){
        if (this.cartProducts?.find(product => product?.quantity !== 0)) {
            this.isProductInCart.next(true)
        } else {
            this.isProductInCart.next(false)
        }
    }

    deleteProductFromCart(id: string) {
        const filteredArray = this.cartProducts.filter(product => product?.id !== id);
        this.cartProducts = filteredArray;
        this.productsInCart.next(filteredArray);
        this.isProductPresentInCart(id);
    }

}