export interface Product {
    name?: string;
    price?: number;
    category?: string;
    imageUrl?: string;
    id: string;
    quantity: number
}

export interface ProductList {
    products: Product[]
}