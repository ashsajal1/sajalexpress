interface Product {
    id: number,
    name: string,
    category: string,
    badge: string,
    tags: string[],
    image: string,
    originalPrice: number,
    discountPrice: number,
    get discountRate(): number;
    rating: number,
}

export const productList: Product[] = [
    {
        id: 1,
        name: "T-shirt",
        category: "Cloth",
        badge: "New",
        tags: [],
        image: 'https://picsum.photos/200/200/',
        originalPrice: 50.00,
        discountPrice: 30.00,
        get discountRate() {
            return ((this.originalPrice - this.discountPrice) / this.originalPrice) * 100;
        },
        rating: 4.65,
    },
    {
        id: 2,
        name: "Pant",
        category: "Cloth",
        badge: "New",
        tags: [],
        image: 'https://picsum.photos/200/200/',
        originalPrice: 80.00,
        discountPrice: 50.00,
        get discountRate() {
            return ((this.originalPrice - this.discountPrice) / this.originalPrice) * 100;
        },
        rating: 5.00,
    },
    {
        id: 3,
        name: "Suit",
        category: "Cloth",
        badge: "New",
        tags: [],
        image: '',
        originalPrice: 500.00,
        discountPrice: 400.00,
        get discountRate() {
            return ((this.originalPrice - this.discountPrice) / this.originalPrice) * 100;
        },
        rating: 4.00,
    },
    {
        id: 4,
        name: "Jeans",
        category: "Cloth",
        badge: "New",
        tags: [],
        image: '',
        originalPrice: 100.00,
        discountPrice: 80.00,
        get discountRate() {
            return ((this.originalPrice - this.discountPrice) / this.originalPrice) * 100;
        },
        rating: 4.05,
    },
    {
        id: 5,
        name: "Winter Cap",
        category: "Cloth",
        badge: "New",
        tags: [],
        image: '',
        originalPrice: 40.00,
        discountPrice: 30.00,
        get discountRate() {
            return ((this.originalPrice - this.discountPrice) / this.originalPrice) * 100;
        },
        rating: 3.90,
    },
    {
        id: 6,
        name: "Hoodie",
        category: "Cloth",
        badge: "New",
        tags: [],
        image: '',
        originalPrice: 400.00,
        discountPrice: 300.00,
        get discountRate() {
            return ((this.originalPrice - this.discountPrice) / this.originalPrice) * 100;
        },
        rating: 5.00,
    },
    {
        id: 7,
        name: "Sweater",
        category: "Cloth",
        badge: "New",
        tags: [],
        image: '',
        originalPrice: 800.00,
        discountPrice: 700.00,
        get discountRate() {
            return ((this.originalPrice - this.discountPrice) / this.originalPrice) * 100;
        },
        rating: 4.00,
    },
];