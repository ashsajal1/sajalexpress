import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface Product {
    id: number,
    name: string,
    category: string,
    badge: string,
    tags: string[],
    image: string,
    originalPrice: number,
    discountPrice: number,
    discountRate: number;
    rating: number,
}

interface CartItem extends Product {
    quantity: number;
}

interface ProductContextProps {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

interface ProductProviderProps {
    children: ReactNode;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                const updatedCart = prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                return updatedCart;
            } else {
                const cartItem: CartItem = { ...product, quantity: 1 };
                return [...prevCart, cartItem];
            }
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <ProductContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = (): ProductContextProps => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};