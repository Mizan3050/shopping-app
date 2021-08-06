import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartRepositoryService {

    productsCart: string[] = [];

    public productInCart = new BehaviorSubject<number>(this.productsCart?.length);
    productInCart$ = this.productInCart.asObservable();

    addProductToCart(id: string){
        this.productsCart.push(id);
        this.productInCart.next(this.productsCart?.length)
    }
}