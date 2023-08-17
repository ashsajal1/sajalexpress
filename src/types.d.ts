export interface Product {
    id: number;
    name: string;
    category: string;
    badge: string;
    tags: string[];
    image: string;
    originalPrice: number;
    discountPrice: number;
    discountRate: number;
    rating: number;
}


export interface CartItem extends Product {
    quantity: number
}