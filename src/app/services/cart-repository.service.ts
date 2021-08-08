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

    public productAccordingToCategories = new BehaviorSubject<Product[]>([]);
    productAccordingToCategories$ = this.productAccordingToCategories.asObservable();

    addProductToCart(productId: string){
        const productToAdd = this.listOfProducts?.products.find(product => product?.id === productId);
        const currentProductInCart = this.cartProducts?.find(product => product?.id === productId);

        if(!currentProductInCart?.quantity){
            const { quantity, id, category, imageUrl, price, name } = productToAdd || {}
            this.cartProducts.push({quantity: quantity+1, id, category, imageUrl, price, name})
            this.productsInCart.next(this.cartProducts);
        } else {
            this.increaseProductQuantity(productId, true);
        }
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

    increaseProductQuantity(id: string, toIncrease: boolean) {
       const updatedCartAfterIncrement = this.cartProducts.map((product) => {
            if(product?.id === id) {
                let updatedQty = product?.quantity;
                if (toIncrease) {
                    updatedQty = product?.quantity + 1;
                } else if((!toIncrease) && product?.quantity > 1) {
                    updatedQty = product?.quantity - 1;
                } else {
                    updatedQty = product?.quantity;
                }
                const updatedProductInCart: Product = {
                    quantity: updatedQty,
                    id,
                    imageUrl: product?.imageUrl,
                    price: product?.price,
                    category: product?.category,
                    name: product?.name
                }
                return updatedProductInCart;
            } else return product;
        })
        this.cartProducts = updatedCartAfterIncrement;
        this.productsInCart.next(updatedCartAfterIncrement);
    }
 
}