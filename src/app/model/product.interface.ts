export interface Product {
    name?: string;
    price?: number;
    category?: string;
    imageUrl?: string;
    id: string;
}

export interface ProductList {
    products: Product[]
}