export interface Product {
    name: string;
    price: number;
    category: string;
    imageUrl: string;
    id: string;
    quantity: number;
    description?: string;
}

export interface ProductList {
    products: Product[]
}